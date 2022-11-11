import React from "react";
import { FooterReactDocsProps } from "./interface";

export default function FooterReactDocs(props: FooterReactDocsProps) {
  return props.customFooter ? (
    props.customFooter
  ) : (
    <footer
      style={{
        backgroundColor: "#3d3333" || "#070708",
        width: "100%",
        textAlign: "center",
        padding: "2%",
        borderTop: "2px solid rgba(0,0,0,0.5)",
      }}
    >
      <p style={{ color: "white" }}>
        Designed with <b>NextDocs</b>, created by{" "}
        <a
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/hernandemonteiro"
        >
          Hernande Monteiro
        </a>
      </p>
    </footer>
  );
}
