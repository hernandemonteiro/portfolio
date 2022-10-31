import React from "react";
import Button from '@mui/material/Button';
import styles from './Buttons.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}
export default function ButtonOne(props: ButtonProps){
    return (

        <Button onClick={props.onClick}
        className={styles.buttonOne}
        sx={{
            width: '60vw',
            margin: '2%',
            padding: '2%',
            fontWeight: 'bold',
            backgroundColor: "rgb(24, 24, 24)",
            boxShadow: "none",
            color: "white",
        }} variant="contained">{props.children}</Button>
    )
}