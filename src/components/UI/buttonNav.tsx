import React from "react";
import Button from '@mui/material/Button';

interface ButtonProps {
    children: any;
    onClick?: any;
}
export default function ButtonNav(props: ButtonProps){
    return (
        <Button onClick={props.onClick} className='m-2 bold' variant="contained">{props.children}</Button>
    )
}