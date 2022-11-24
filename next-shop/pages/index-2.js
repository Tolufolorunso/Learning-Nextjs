import Head from "next/head";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import { getProducts } from "../lib/products";

// const products = [
//   { id: 1, title: "First Product" },
//   { id: 2, title: "Second Product" },
// ];

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </main>
    </>
  );
}
