import React, { lazy, useEffect } from 'react'
import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import checkAuth from '../app/auth.js';
import initializeApp from '../app/init.js';

import Home from "../pages/Home";
import About from "../pages/About";
import Partner from "../pages/Partner";

import Layout from "../containers/Layout.jsx";
import Login from "../pages/Login.jsx";

import WebRoutes from './WebRoutes';
import UserLayout from '../pages/web/user/containers/UserLayout.jsx';

const HomePage = lazy(() => import('../pages/web/user/HomePage.jsx'));
const AboutPage = lazy(() => import('../pages/web/user/features/about/AboutPage.jsx'));

initializeApp();

const token = checkAuth();
const role = "Guest";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<WebRoutes />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/app/*" element={<Layout />} />
        {role === 'Guest' && (
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/partner" element={<AboutPage />} />
          </Route>
        )}


        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to={token ? "/" : "/"} replace />}/>

        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
