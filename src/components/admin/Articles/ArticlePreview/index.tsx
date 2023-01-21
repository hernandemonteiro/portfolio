import React from "react";
import { Markup } from "react-render-markup";
import { Button } from "../../../ui/Buttons";
import { iArticlePreview } from "../../../../interfaces/iArticlePreview";

export default function ArticlePreview(props: iArticlePreview) {
  return (
    <div style={{ width: "70vw", wordWrap: "break-word" }}>
      <Markup markup={props.content} />
      <br />
      <br />
      <Button onClick={props.onClick}>FECHAR PREVIEW</Button>
    </div>
  );
}
