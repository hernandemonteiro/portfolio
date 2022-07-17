import React from "react";
import Button from '@mui/material/Button';
import styles from '../../styles/Nav.module.css';

interface ButtonProps {
    children: any;
    onClick?: any;
}
export default function ButtonNav(props: ButtonProps){
    return (
        <Button onClick={props.onClick} className={styles.Btn} variant="contained">{props.children}</Button>
    )
}