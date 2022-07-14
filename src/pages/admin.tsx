import React from "react";
import Login from "../components/Admin/Login";
import Template from "../components/Template";
import Title from "../components/UI/TitleName";
import styles from "../styles/Template.module.css";

export default function Admin() {
    return (
        <Template>
            <Title />
            <hr />
            <Login />
        </Template>
    )
}