import Head from "next/head";
import { getProduct, getProducts } from "../../lib/products";

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  console.log("context", id);
  const product = await getProduct(id);

  return {
    props: { product },
    revalidate: 30,
  };
}

const Product = ({ product: { id, title, description } }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="bg-gray-100 p-3">
        <h1 className="text-lg">{title}</h1>
        <p>{description}</p>
      </article>
    </>
  );
};

export default Product;
