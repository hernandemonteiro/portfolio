import React from "react";
import { Markup } from "react-render-markup";
import { Button } from "../../../ui/Buttons";
import { ArticlePreviewProps } from "./interface";

export default function ArticlePreview(props: ArticlePreviewProps) {
  return (
    <div>
      <Markup markup={props.content} />
      <Button onClick={props.onClick}>FECHAR PREVIEW</Button>
    </div>
  );
}
