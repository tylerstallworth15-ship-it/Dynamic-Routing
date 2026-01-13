import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
=======
import ReactDOM from 'react-dom/client;
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './index.css';

ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
>>>>>>> a0d72d8dc6a3a28c5fa01bb3ca1785c90b82d258
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);