import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const RamPage = () => {
  return (
    <div>
      <h2>This category is Ram Page...</h2>
    </div>
  );
};

export default RamPage;

RamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
