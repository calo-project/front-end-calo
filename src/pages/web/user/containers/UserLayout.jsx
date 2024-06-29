import React from "react";
import Navbar from "../../../../components/common/layouts/Navbar.jsx";
import Footer from "../../../../components/common/layouts/Footer.jsx";

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
