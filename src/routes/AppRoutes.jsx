import React, { lazy, useEffect } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import checkAuth from "../app/auth.js";
import initializeApp from "../app/init.js";

import HomePage from "../pages/web/user/HomePage.jsx";
import About from "../pages/About";
import Partner from "../pages/Partner";

import Layout from "../containers/Layout.jsx";
import Login from "../pages/Login.jsx";
import Regis from "../pages/Register.jsx";
import UserLayout from "../pages/web/containers/UserLayout.jsx";

// const HomePage = lazy(() => import("../pages/web/user/HomePage.jsx"));
const AboutPage = lazy(() =>
  import("../pages/web/user/features/about/AboutPage.jsx")
);

initializeApp();

const token = checkAuth();

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route path="/app/*" element={<Layout />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regis />} />

        <Route path="*" element={<Navigate to={token ? "/" : "/"} replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
