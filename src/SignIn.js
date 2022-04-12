import { useState } from "react";

export default function SignIn() {
  // States for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h4>Please enter all the fields</h4>
      </div>
    );
  };

  return (
    <div className="form form-container">
      <header className="header">
        <h1>Login</h1>
      </header>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {/* {successMessage()} */}
      </div>

      <form>
        {/* Labels and inputs for form data */}

        <label className="label">EmailId</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
          placeholder="Enter Email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        
      </form>
    </div>
  );
}
