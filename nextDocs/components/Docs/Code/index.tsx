import React from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/github-dark.css";
import { CodeProps } from "./interface";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

export default function Code(props: CodeProps) {
  setTimeout(() => hljs.highlightAll(), 300);

  return (
    <pre style={{ margin: "1%"}}>
      <code style={{borderRadius: "7px"}} className={props.language}>{`${props.code}`}</code>
    </pre>
  );
}
