import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.Header}>
            <Typography className='m-2 Title' variant="h4">Hernande Monteiro</Typography>
            <hr />
        </div>
    )
}