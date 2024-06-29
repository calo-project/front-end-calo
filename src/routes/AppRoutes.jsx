import React, { lazy, useEffect } from 'react'
import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import checkAuth from '../app/auth.js';
import initializeApp from '../app/init.js';

import Home from "../pages/Home";
import About from "../pages/About";
import Partner from "../pages/Partner";

import Layout from "../containers/Layout.jsx";
import Login from "../pages/Login.jsx";

initializeApp();

const token = checkAuth();

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/app/*" element={<Layout />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to={token ? "/" : "/"} replace />}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
