import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    // Check empty fields
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Check name
    if (name.length < 3) {
      setError("Name must contain at least 3 characters.");
      return;
    }

    // Check email
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check password
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Check password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Success
    setSuccess("Registration validation successful!");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Create your account and start preparing for placements.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="form-group">

            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

          </div>


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
                placeholder="Create a password"
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


          {/* Confirm Password */}
          <div className="form-group">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <div className="password-container">

              <input
                id="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
              />

              <button
                type="button"
                className="password-button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>


          {/* Error Message */}
          {error && (
            <p className="error-message">
              {error}
            </p>
          )}


          {/* Success Message */}
          {success && (
            <p className="success-message">
              {success}
            </p>
          )}


          {/* Register Button */}
          <button
            type="submit"
            className="auth-button"
          >
            Create Account
          </button>

        </form>


        {/* Login Link */}
        <p className="auth-footer">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>


        {/* Home Link */}
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

export default Register;