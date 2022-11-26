import { useState } from "react";
import Router from "next/router";
import Crypto from "./helpers/crypto";
import nookies, { setCookie, parseCookies, destroyCookie } from "nookies";

export default function useAuthAdmin() {
  const cookies = parseCookies();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function login(e) {
    e.preventDefault();
    confirmAdmin(email, password)
      ? setLocalUser({ email, password })
      : setMessage("Email ou senha incorretos!");
    Router.push("/login");
  }

  function confirmAdmin(email, password) {
    return email === process.env.NEXT_PUBLIC_BLOG_EMAIL &&
      password === process.env.NEXT_PUBLIC_PASSWORD_EMAIL
      ? true
      : false;
  }

  async function setLocalUser(value) {
    setLoading(true);
    const userString = JSON.stringify(value);
    const user = await Crypto.cryptoEncrypt(userString);
    setCookie(null, "user", user, {
      SameSite: "Lax",
    });
    Router.push("/admin");
  }

  function logout() {
    destroyCookie(null, "user");
    redirectUserAndCloseLoading("/login");
  }

  async function isLoggedAdmin() {
    const userDecrypted = await getAdminUserAndDecrypt();
    (await confirmAdmin(userDecrypted.email, userDecrypted.password))
      ? setLoading(false)
      : redirectUserAndCloseLoading("/login");
  }

  async function redirectLoginPageIfLogged() {
    const userDecrypted = await getAdminUserAndDecrypt();
    confirmAdmin(userDecrypted.email, userDecrypted.password)
      ? redirectUserAndCloseLoading("/admin")
      : setLoading(false);
  }

  async function getAdminUserAndDecrypt() {
    return JSON.parse(
      (await Crypto.cryptoDecrypt((await cookies.user) || "")) || "[]"
    );
  }

  function redirectUserAndCloseLoading(route) {
    Router.push(route);
    setTimeout(() => setLoading(false), 1000);
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
