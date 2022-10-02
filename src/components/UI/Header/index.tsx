import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.Header}>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    margin: '0.75rem',
                    fontFamily: 'Cormorant SC',
                }}
                variant="h4">
                <Link href='/'>
                    Hernande Monteiro
                </Link>
            </Typography>
            <hr />
        </div>
    )
}