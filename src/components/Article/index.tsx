import React from "react";
import styles from "../styles/Article.module.css";
interface ArticlesProps{
    children?: any;
}

export default function Articles(props: ArticlesProps) {
    return (
        <div className={styles.BoxArticle}>
            {props.children}
       </div>
    )
}