import React from "react";
import "./App.css";
import LoginPage from "./pages/login.tsx";
import SignupPage from "./pages/signup.tsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {

const isAuthenticated = false;
 return (
    <div className="App">
         <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} 
        />
        <Route 
          path="/signup" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignupPage />} 
        />
     
        {/* Add a catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
