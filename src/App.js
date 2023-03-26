import React, { Fragment, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate replace to="/dashboard" />} />
          <Route exact path="/register" element={!isAuthenticated ? <Register setAuth={setAuth} /> : <Navigate replace to="/login" />} />
          <Route exact path="/dashboard" element={isAuthenticated ? <Dashboard setAuth={setAuth} /> : <Navigate replace to="/login" />} />
        </Routes>

      </BrowserRouter>
    </Fragment>

  );
}

export default App;
