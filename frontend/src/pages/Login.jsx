import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    alert("Login validation successful!");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome Back 👋</h1>

        <p className="auth-subtitle">
          Login to continue your placement preparation.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

          </div>


          {/* Password */}
          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-container">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
              />

              <button
                type="button"
                className="password-button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>


          {/* Error Message */}
          {error && (
            <p className="error-message">
              {error}
            </p>
          )}


          {/* Login Button */}
          <button
            type="submit"
            className="auth-button"
          >
            Login
          </button>

        </form>


        {/* Register */}
        <p className="auth-footer">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>
        </p>


        {/* Home */}
        <Link
          to="/"
          className="home-link"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Login;