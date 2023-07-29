import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const StorageDevicePage = () => {
  return (
    <div>
      <h2>This category is Storage Device Page...</h2>
    </div>
  );
};

export default StorageDevicePage;

StorageDevicePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
