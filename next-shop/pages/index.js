import Head from "next/head";
import Link from "next/link";
import Title from "../components/Title";
import { getProducts } from "../lib/products";

// const products = [
//   { id: 1, title: "First Product" },
//   { id: 2, title: "Second Product" },
// ];
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
    revalidate: 5 * 60,
  };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>{product.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
