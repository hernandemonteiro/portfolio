import { useState } from "react";
import Crypto from "../helpers/crypto";

export default function useAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/auth/login/${email}/${password}`)
      .then((res) => res.json())
      .then(async (res) => {
        const user = await Crypto.cryptoDecrypt(res);
        user._id && setUser(res);
      })
      .catch((error) => console.log("Error Login: " + error));
  }
  function setUser(value) {
    localStorage.setItem("user", value);
    window.location.href == "/admin";
  }
  function logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }
  function isLogged() {
    const user = localStorage.getItem("user");
    !user && window.location.href == "/login";
  }
  return {
    login,
    logout,
    isLogged,
    setEmail,
    setPassword,
  };
}
