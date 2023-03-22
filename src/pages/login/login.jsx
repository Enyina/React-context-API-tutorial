import React, { useState } from "react";

import styles from "./Login.module.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic

    const userCridentials = { username, password };
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          username:
          <input
            type="emial"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
