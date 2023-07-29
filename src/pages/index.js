import RootLayout from "@/components/Layouts/RootLayout";
import AllProduct from "@/components/UI/AllProduct";
import Banner from "@/components/UI/Banner";
import Navbar from "@/components/shared/Navbar";
import { Button } from "antd";
import React from "react";

const HomePage = ({ allProducts }) => {
  // console.log(allProducts);
  return (
    <div>
      <div className="">
        <Banner />
      </div>
      <div>
        <AllProduct allProducts={allProducts} />
      </div>
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
    revalidate: 5,
  };
};
