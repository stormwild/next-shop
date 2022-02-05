import Head from "next/head";
import { CustomApiError } from "../../lib/api";
import { getProduct, getProducts } from "../../lib/products";

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  console.log("context", id);
  try {
    const product = await getProduct(id);

    return {
      props: { product },
      revalidate: 30,
    };
  } catch (err) {
    if (err instanceof CustomApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
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
