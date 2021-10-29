import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("new user", newUser);
    axios
      .post("/api/users/register", {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      })
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log("error message", err.message);
      });
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="email"
        name="email"
        placeholder="Enter email..."
        value={newUser.email}
        onChange={(event) =>
          setNewUser((prev) => ({ ...prev, email: event.target.value }))
        }
        className="form-input"
      />
      <input
        type="text"
        name="username"
        placeholder="Enter username..."
        value={newUser.username}
        onChange={(event) =>
          setNewUser((prev) => ({ ...prev, username: event.target.value }))
        }
        className="form-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        value={newUser.password}
        onChange={(event) =>
          setNewUser((prev) => ({ ...prev, password: event.target.value }))
        }
        className="form-input"
      />

      <button className="btn" type="submit">
        Register
      </button>
    </form>
  );
}
