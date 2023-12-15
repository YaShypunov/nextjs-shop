import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export const getMeals = async () => {
  return db.prepare('SELECT * FROM meals').all();
}

export const getMeal = async (slug) => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export const saveMeal = async (meal) => {
  const updatedMeal = {...meal};
  updatedMeal.slug = slugify(meal.title, { lower: true });
  updatedMeal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const filename = `${updatedMeal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if(error) {
      throw new Error('Saving image failed!');
    }
  })

  updatedMeal.image = `/images/${filename}`;

  return db.prepare(`INSERT INTO meals 
  (title, slug, summary, instructions, image, creator, creator_email)
  VALUES (
    @title, 
    @slug, 
    @summary, 
    @instructions, 
    @image, 
    @creator, 
    @creator_email
  )
  `).run(updatedMeal);
}
