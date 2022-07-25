import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.Header}>
            <Typography className={styles.Title} variant="h4">Hernande Monteiro</Typography>
            <hr />
        </div>
    )
}