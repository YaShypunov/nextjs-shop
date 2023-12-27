import path from 'path';

const getFilePath = (fileName) => {
  const filePath = path.join(process.cwd(), 'data', `${fileName}.json`);

  return filePath
}

export default getFilePath;
