import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [user2, setUser2] = useState(null)
  const [status, setStatus] = useState('')

  const login = function (email, password) {
    if (password !== '123') {
      return setStatus("invalid username or password")
    }
    // made changes here for pp
    setUser({ id: 1, email: "mario@hotmail.com", handle: "mario_dabaddest", profile_picture_url: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg" });
    setStatus('logged in successfully')

    setUser2({ id: 2, email: "luigi@g.com", handle: "player2_luigi", profile_picture_url: "https://ssb.wiki.gallery/images/6/67/Luigi_SSBB.jpg" });
    setStatus('logged in successfully')
  }

  const logout = function () {
    setUser(null);
  }

  return { user, login, logout, status }
}