import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const PcBuilderPage = () => {
  return (
    <div>
      <h2>This is PC Builder Page.....</h2>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
