import { useState, useEffect } from "react";

export default function Register(props) {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const { username, email, password, password_confirmation } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    // adding this useEffect to compare password with password_confirmation values and notify user if successful
    if (password === "" || password_confirmation === "") {
      setMessage(" ");
    } else if (password !== password_confirmation) {
      setMessage("Passwords don't match!");
    } else if (password === password_confirmation) {
      setMessage("Passwords match!");
    }
  }, [password, password_confirmation]);

  return (
    <form
      className="edit-fields, form"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={handleChange}
        />
      </label>
      <br />
      {message}
      <br />
      <button>Submit</button>
    </form>
  );
}
