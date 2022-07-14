import React from "react";

interface ArticlesProps{
    children?: any;
}

export default function Articles(props: ArticlesProps) {
    return (
        <div>
            {props.children}
        </div>
    )
}