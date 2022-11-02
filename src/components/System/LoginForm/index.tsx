import React from "react";
import ButtonDefault from "../../UI/Buttons";
import InputDefault from "../../UI/Inputs";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  onSubmit: any;
  onChangeEmail: (e) => void;
  onChangePassword: (e) => void;
  message?: string;
}

export default function LoginForm(props: LoginFormProps) {
  return (
    <form onSubmit={props.onSubmit} className={styles.form}>
      {props.message}
      <InputDefault
        label="Email"
        required={true}
        type="email"
        onChange={props.onChangeEmail}
      />
      <InputDefault
        label="Password"
        required={true}
        type="password"
        onChange={props.onChangePassword}
      />
      <ButtonDefault width="40%" type="submit">
        Entrar
      </ButtonDefault>
    </form>
  );
}
