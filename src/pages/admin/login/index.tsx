import Head from "next/head";
import React, { useEffect } from "react";
import Template from "../../../components/Blog/Template";
import LoginForm from "../../../components/System/LoginForm";
import LoginPage from "../../../components/System/LoginPage";
import useAuth from "../../../hooks/useAuthAdmin";

export default function Home() {
  const { setEmail, setPassword, login, redirectLoginPageIfLogged, message } =
    useAuth();
  redirectLoginPageIfLogged();
  return (
    <Template>
      <LoginPage>
        <LoginForm
          message={message}
          onSubmit={login}
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChangePassword={(e) => setPassword(e.target.value)}
        />
      </LoginPage>
    </Template>
  );
}
