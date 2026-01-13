import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav style={{ padding: "10px", display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>

      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  );
};

export default Navbar;