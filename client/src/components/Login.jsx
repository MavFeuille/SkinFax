import { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/users/login", {
        username: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="email"
        name="email"
        placeholder="Enter email..."
        value={user.username}
        onChange={(event) =>
          setUser((prev) => ({ ...prev, email: event.target.value }))
        }
        className="form-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        value={user.password}
        onChange={(event) =>
          setUser((prev) => ({ ...prev, password: event.target.value }))
        }
        className="form-input"
      />

      <button className="btn" type="submit">
        Login
      </button>
    </form>
  );
}
