import React from "react";
import Example from "../components/Admin/newPost";
import Nav from "../components/Nav";
import Template from "../components/Template";
import ButtonNav from "../components/UI/buttonNav";
import Title from "../components/UI/TitleName";
import styles from "../styles/Template.module.css";

export default function Posts() {
    return (
        <Template>
            <Title />
            <hr />
            <div className={styles.Content}>
                <Nav>
                    <ButtonNav>Dashboard</ButtonNav>
                </Nav>
                <div className={styles.ArticleBox}>
                    {/* configurar jodit e estou usando Mui; */}
                </div>
            </div>
        </Template>
    )
}