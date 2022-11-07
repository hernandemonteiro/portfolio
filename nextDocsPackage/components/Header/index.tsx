import React from "react";
interface HeaderNextDocsProps {
  name: string;
  backgroundColor?: string;
}
export default function HeaderNextDocs(props: HeaderNextDocsProps) {
  return (
    <header
      style={{
        display: "flex",
        backgroundColor: props.backgroundColor || "black",
        width: "100%",
        height: "5vh",
        alignItems: "center",
      }}
    >
      <a
        href={"/docs"}
        style={{ color: "white", textTransform: "uppercase", marginLeft: "1%" }}
      >
        {props.name}
      </a>
    </header>
  );
}
