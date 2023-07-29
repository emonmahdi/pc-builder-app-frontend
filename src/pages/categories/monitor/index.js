import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const MonitorPage = () => {
  return (
    <div>
      <h2>This category is Monitor...</h2>
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
