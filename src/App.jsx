import React from 'react';
import AppRoutes from './routes/AppRoutes.jsx';
import Navbar from './components/common/layouts/Navbar.jsx';
import Footer from './components/common/layouts/Footer.jsx';

export default function App() {
  return (
    <div className="App max-w-7xl mx-auto justify-center">
      <AppRoutes />
    </div>
  );
}