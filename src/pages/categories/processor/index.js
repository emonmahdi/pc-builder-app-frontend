import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const ProcessorPage = () => {
  return (
    <div>
      <h2>This category is processor...</h2>
    </div>
  );
};

export default ProcessorPage;

ProcessorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
