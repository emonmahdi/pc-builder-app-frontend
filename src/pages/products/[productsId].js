/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const ProductDetailPage = ({ product }) => {
  const { id, title, img, price, status, category, rating } = product;
  return (
    <div className="h-[100vh] w-100">
      {/* <h2>This is single product details page</h2>
      <h2>Title: {product?.title}</h2>
      <h2>Product ID: {product?.id}</h2> */}
      {/* =========== */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl w-[50%]" />
          <div className="w-[50%] pl-20">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex mt-4">
              <div>
                <p className="font-bold">
                  <span className="text-gray-500 font-bold">Price:</span>{" "}
                  {price}
                </p>
              </div>
              <div className="ml-6">
                <p className="font-bold">
                  <span className="text-gray-500 font-bold">Status:</span>{" "}
                  {status}
                </p>
              </div>
              <div className="ml-6">
                <h4 className="font-bold">
                  <span className="text-gray-500 font-bold">Category:</span>{" "}
                  {category}
                </h4>
              </div>
              <div className="ml-6">
                <p className="font-bold">
                  <span className="text-gray-500 font-bold"> Rating:</span>{" "}
                  {rating}
                </p>
              </div>
            </div>
            <div className="flex mt-4"></div>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products/");
  const products = await res.json();

  console.log("Products", products);

  const paths = products?.map((product) => ({
    params: { productsId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products/${params.productsId}`
  );
  const data = await res.json();

  console.log(data);

  return {
    props: {
      product: data,
    },
  };
};

/* 
export const getStaticPaths = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    console.log("product data: ", products.data);

    const paths = products?.data?.map((product) => ({
      params: { productsId: product.id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products/${params?.productsId}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
 */
