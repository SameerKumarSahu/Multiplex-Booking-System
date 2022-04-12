import { useState } from "react";

export default function SignUp() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the mobileno. change
  const handleMobile = (e) => {
    setMobile(e.target.value);
    setSubmitted(false);
  };

  // Handling the dob change
  const handleDOB = (e) => {
    setDob(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the cpassword change
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
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
        <h1>User Registration</h1>
      </header>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
          placeholder="Enter Name"
        />

        <label className="label">EmailId</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
          placeholder="Enter Email"
        />

        <label className="label">MobileNumber</label>
        <input
          onChange={handleMobile}
          className="input"
          value={mobile}
          type="text"
          placeholder="Enter Mobile Number"
        />

        <label className="label">DateOfBirth</label>
        <input onChange={handleDOB} className="input" value={dob} type="date" />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
          placeholder="Enter Password"
        />

        <label className="label">Confirm Password</label>
        <input
          onChange={handleCPassword}
          className="input"
          value={cpassword}
          type="password"
          placeholder="Enter Confirm Password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        
      </form>
    </div>
  );
}
