import React from "react";
import Footer from "./Footer";
import NavRecipe from "./NavRecipe";

const Layout = ({ children }) => {
  return (
    <>
      <NavRecipe />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
