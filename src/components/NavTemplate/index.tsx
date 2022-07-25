import React, { useState } from "react";
import styles from "./Nav.module.css";

interface NavProps {
    children?: any;
}

export default function Nav(props: NavProps) {

    const [className, setClassName] = useState<any>(styles.hiddenMenu);

    function DropdownMenu() {

        if (className === styles.hiddenMenu) {
            setClassName('');
        } else {
            setClassName(styles.hiddenMenu);
        }

    }

    return (
        <nav
            className={`${className} ${styles.NavBox}`}>
            <button
                onClick={() => (DropdownMenu())}
                className={styles.MobileButtonMenu}>
                Categorias
            </button>
            {props.children}
        </nav>
    )
}