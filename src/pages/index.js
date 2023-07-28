import RootLayout from "@/components/Layouts/RootLayout";
import Navbar from "@/components/shared/Navbar";
import { Button } from "antd";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>PC Builder Application Next Js</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
