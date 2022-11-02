import React from "react";
import styles from "./LoginPage.module.scss";
interface LoginPageProps {
  children: React.ReactNode;
}

export default function LoginPage(props: LoginPageProps) {
  return <div className={styles.LoginPage}>{props.children}</div>;
}
