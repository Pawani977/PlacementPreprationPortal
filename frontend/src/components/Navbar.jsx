import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <h2>Placement Portal</h2>

      <div>

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/companies">
          Companies
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;