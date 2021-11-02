import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [status, setStatus] = useState('')

  const login = function (email, password) {
    if (password !== '123') {
      return setStatus("invalid username or password")
    }

    setUser({ id: 1, email: "mario@hotmail.com", handle: "mario_dabaddest" });
    setStatus('logged in successfully')
  }

  const logout = function () {
    setUser(null);
  }

  return { user, login, logout, status }
}