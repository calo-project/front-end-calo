import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Partner from "../pages/Partner";
import Test from "../pages/test/Test";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/test/home" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
