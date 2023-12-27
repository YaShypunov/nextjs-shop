import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

function HomePage({products = []}) {
  return (
    <ul>
      {products.map((product) => 
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
          {product.title}
          </Link>
        </li>
      )}
    </ul>
  );
}

export const getStaticProps = async () => {
  console.log("Regenerating...")
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData);

  if(!data){
    return {
      rediirect: {
        destionation: '/no-data'
      }
    }
  }
  if(!data?.products?.length){
    return {
      notFound: true
    }
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10,
  }
}

export default HomePage;
