import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const MotherboardPage = () => {
  return (
    <div>
      <h2>This category is Motherboard Page...</h2>
    </div>
  );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
