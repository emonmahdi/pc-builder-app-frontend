import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const PowerSupplyPage = () => {
  return (
    <div>
      <h2>This category is Power supply unit Page...</h2>
    </div>
  );
};

export default PowerSupplyPage;

PowerSupplyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
