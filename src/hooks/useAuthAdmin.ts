import { useState } from "react";
import Router from "next/router";
import Crypto from "../helpers/crypto";

export default function useAuthAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function login(e) {
    e.preventDefault();
    confirmAdmin(email, password)
      ? setLocalUser({ email, password })
      : setMessage("Email ou senha incorretos!");
    Router.push("/admin/login");
  }

  function confirmAdmin(email, password) {
    return email === process.env.NEXT_PUBLIC_BLOG_EMAIL &&
      password === process.env.NEXT_PUBLIC_PASSWORD_EMAIL
      ? true
      : false;
  }

  async function setLocalUser(value) {
    const userString = JSON.stringify(value);
    const user = await Crypto.cryptoEncrypt(userString);
    localStorage.setItem("user", user);
    Router.push("/admin");
  }

  function logout() {
    localStorage.removeItem("user");
    Router.push("/admin/login");
  }

  async function getAdminUserAndDecrypt() {
    const user = (await localStorage.getItem("user")) || "";
    return JSON.parse((await Crypto.cryptoDecrypt(user)) || "[]");
  }

  async function redirectLoginPageIfLogged() {
    const userDecrypted = await getAdminUserAndDecrypt();
    confirmAdmin(userDecrypted.email, userDecrypted.password) &&
      Router.push("/admin");
  }

  async function isLoggedAdmin() {
    const userDecrypted = await getAdminUserAndDecrypt();
    confirmAdmin(userDecrypted.email, userDecrypted.password) &&
    (await localStorage.getItem("user"))
      ? setLoading(false)
      : Router.push("/admin/login");
  }
  return {
    login,
    logout,
    isLoggedAdmin,
    setEmail,
    setPassword,
    redirectLoginPageIfLogged,
    message,
    loading,
  };
}
