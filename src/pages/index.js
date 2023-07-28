import RootLayout from "@/components/Layouts/RootLayout";
import AllProduct from "@/components/UI/AllProduct";
import Navbar from "@/components/shared/Navbar";
import { Button } from "antd";
import React from "react";

const HomePage = ({ allProducts }) => {
  // console.log(allProducts);
  return (
    <div>
      <h1>PC Builder Application Next Js</h1>
      <AllProduct allProducts={allProducts} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allProducts: data.data,
    },
  };
};
