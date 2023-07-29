import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const OthersPage = () => {
  return (
    <div>
      <h2>This category is Others Page...</h2>
    </div>
  );
};

export default OthersPage;

OthersPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
