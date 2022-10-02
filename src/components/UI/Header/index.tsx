import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.Header}>
            <Typography
            className={styles.Title}
                sx={{
                   
                }}
                variant="h4">
                <Link href='/' className={styles.Title}>
                    Hernande Monteiro
                </Link>
            </Typography>
        </div>
    )
}