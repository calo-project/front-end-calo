import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
// import SuspenseContent from "../../../../containers/SuspenseContent.jsx";

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <SuspenseContent fallback={<SuspenseContent />} /> */}
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
