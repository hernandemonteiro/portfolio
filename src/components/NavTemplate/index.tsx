import React from "react";
import styles from "../../styles/Nav.module.css";

interface NavProps {
    children?: any;
}

export default function Nav(props: NavProps) {
    return (
        <nav className={styles.NavBox}>
            {props.children}
        </nav>
    )
}