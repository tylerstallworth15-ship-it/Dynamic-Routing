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