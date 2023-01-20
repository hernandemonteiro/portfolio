import React from "react";
import { Button } from "../../../ui/Buttons";
import InputDefault from "../../../ui/Inputs";
import styles from "./LoginForm.module.scss";
import { iLoginForm } from "../../../../interfaces/iLoginForm";

export default function LoginForm(props: iLoginForm) {
  return (
    <form onSubmit={props.onSubmit} className={styles.form}>
      {props.message}
      <InputDefault
        label="Email"
        required={true}
        type="email"
        onChange={props.onChangeEmail}
        placeholder="Email..."
      />
      <InputDefault
        label="Password"
        required={true}
        type="password"
        onChange={props.onChangePassword}
        placeholder="Senha..."
      />
      <Button width="40%" type="submit">
        Entrar
      </Button>
    </form>
  );
}
