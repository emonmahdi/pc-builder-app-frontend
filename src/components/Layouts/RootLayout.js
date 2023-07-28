import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <div className="w-[100%]">
        <Navbar />
        <div className="h-[100vh] p-8">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
