import { useState } from "react";
import Input from "../../../Input";
import styles from "../../styles/formStyles.module.css";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Login Form</h3>
      <Input
        label="Username"
        placeholder="Enter username"
        value={username}
        onChange={(value) => setUsername(value)}
        type="text"
        clearable={true}
      />
      <Input
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={(value) => setPassword(value)}
        type="password"
        clearable={false}
      />
      <button className={styles.formButton}>Sign In</button>
    </div>
  );
};
