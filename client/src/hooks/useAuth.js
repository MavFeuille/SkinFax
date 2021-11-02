import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [status, setStatus] = useState('')

  const login = function (email, password) {
    if (password !== '123') {
      return setStatus("invalid username or password")
    }
    // made changes here for pp
    setUser({ id: 1, email: "mario@hotmail.com", handle: "mario_dabaddest", profile_picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBhbvCwKKUAvEi65IOSDD3TutxtxRmszTMQ&usqp=CAU" });
    setStatus('logged in successfully')
  }

  const logout = function () {
    setUser(null);
  }

  return { user, login, logout, status }
}