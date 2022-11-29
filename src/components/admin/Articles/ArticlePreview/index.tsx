import React from "react";
import { Markup } from "react-render-markup";
import { Button } from "../../../ui/Buttons";
import { ArticlePreviewProps } from "./interface";

export default function ArticlePreview(props: ArticlePreviewProps) {
  return (
    <div style={{ width: "70vw", wordWrap: "break-word" }}>
      <Markup markup={props.content} />
      <br />
      <br />
      <Button onClick={props.onClick}>FECHAR PREVIEW</Button>
    </div>
  );
}
