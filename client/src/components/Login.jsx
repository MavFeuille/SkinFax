import { useState } from "react";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.login(email, password);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <input
          type="email"
          placeholder="Enter email..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="form-input"
        />

        <button className="btn" type="submit">
          Login
        </button>
      </form>
      {props.status && <div>{props.status}</div>}
    </>
  );
}
