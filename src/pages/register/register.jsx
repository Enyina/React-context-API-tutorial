import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "./register.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic
    const userCridentials = { username, password };

    register(userCridentials);
    console.log(userCridentials);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Register</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          username:
          <input
            type="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            type="emial"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Paconfirmssword:
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
