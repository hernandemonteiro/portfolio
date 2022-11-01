import React from "react";
import Template from "../../components/Blog/Template";
import useAuth from "../../hooks/useAuth";

export default function Home() {
  const { setEmail, setPassword, login } = useAuth();
  return (
    <Template>
      <form onSubmit={login}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </Template>
  );
}
