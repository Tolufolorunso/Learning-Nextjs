import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  console.log(products);
  return (
    <ul>
      {products.map((product) => (
        <Link href={`/${product.id}`}>
          <a> <li key={product.id}>{product.title}</li></a>
        </Link>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("re-generated");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
