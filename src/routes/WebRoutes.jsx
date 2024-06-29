import React from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import web from "./web.jsx";
import Navbar from '../components/common/layouts/Navbar.jsx';
import Footer from '../components/common/layouts/Footer.jsx';

export default function WebRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {web.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}
