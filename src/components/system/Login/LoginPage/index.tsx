import React from "react";
import styles from "./LoginPage.module.scss";
import { iLoginPage } from "../../../../interfaces/iLoginPage";

export default function LoginPage(props: iLoginPage) {
  return <div className={styles.LoginPage}>{props.children}</div>;
}
