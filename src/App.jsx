import React from 'react';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  return (
    <div className="App w-screen mx-auto justify-center overflow-y-hidden">
    {/* <div className="App max-w-7xl mx-auto justify-center"> */}
      <AppRoutes />
    </div>
  );
}