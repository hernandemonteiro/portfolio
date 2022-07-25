import React from "react";
import Button from '@mui/material/Button';
import styles from './Buttons.module.css';

interface ButtonProps {
    children: any;
    onClick?: any;
    className?: any;
}
export default function ButtonNav(props: ButtonProps){
    return (

        <Button onClick={props.onClick} className={`${props.className} ${styles.BtnNav}`} variant="contained">{props.children}</Button>
    )
}