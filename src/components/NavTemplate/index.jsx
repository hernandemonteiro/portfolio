import React, { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav(props) {

    const [className, setClassName] = useState(styles.hiddenMenu);

    function DropdownMenu() {

        if (className === styles.hiddenMenu) {
            setClassName('');
        } else {
            setClassName(styles.hiddenMenu);
        }

    }

    return (
        <>
            <div className={styles.MobileContent}>
                <button
                    onClick={() => (DropdownMenu())}
                    className={styles.MobileButtonMenu}>
                    MENU
                </button>
            </div>
            <nav
                className={`${className} ${styles.NavBox}`}>
                {props.children}
            </nav>
        </>

    )
}