import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.Header}>
      <h1 className={styles.Title}>
        <Link href="/">Hernande Monteiro</Link>
      </h1>
    </div>
  );
}
