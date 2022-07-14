import React from "react";
import Button from '@mui/material/Button';

interface ButtonProps {
    children: any;
}
export default function ButtonNav(props: ButtonProps){
    return (
        <Button className='m-2 bold' variant="contained">{props.children}</Button>
    )
}