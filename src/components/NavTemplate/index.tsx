import React, { useEffect, useState } from "react";
import ButtonNav from "../Buttons";
import styles from "./Nav.module.css";

interface NavProps {
    children?: any;
}

export default function Nav(props: NavProps) {

    const [className, setClassName] = useState(`hiddenMenu`);
    function DropdownMenu(){

        if(className === 'hiddenMenu'){
            setClassName('');
        }else {
            setClassName('hiddenMenu');
        } 

    }

    return (
        <>
            <ButtonNav
                onClick={() => (DropdownMenu())}
                className={styles.MobileButtonMenu}>
                Categorias
            </ButtonNav>
            <nav 
            className={`${className} ${styles.NavBox}`}>
                {props.children}
            </nav>

        </>
    )
}