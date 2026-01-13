<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />

        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
=======
import React from 'react';
import { Routes, Route useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import PageWrapper from './components/Pagewrapper';

import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import Login from './pages/Login';

const App: React.FC = () => {
  const location = use Location();

  return (
    <>
      <Navbar />
      <main className='main-content'>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
  )
}
>>>>>>> a0d72d8dc6a3a28c5fa01bb3ca1785c90b82d258
