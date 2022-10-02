import React from "react";
import Button from '@mui/material/Button';
import styles from './Buttons.module.css';

interface ButtonProps {
    children: any;
    onClick?: any;
    className?: any;
}
export default function ButtonOne(props: ButtonProps){
    return (

        <Button onClick={props.onClick} sx={{
            width: '100%',
            margin: '0.7rem',
            padding: '2%',
            fontWeight: 'bold',
            fontFamily: 'Cormorant SC',
            backgroundColor: "rgb(24, 24, 24)",
            color: "white",
        }} variant="contained">{props.children}</Button>
    )
}