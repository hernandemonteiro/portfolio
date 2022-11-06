import React from "react";
import { Button } from "../Buttons";

interface HeaderTableFormProps {
  title: string;
  onClickRegisterButton: () => void;
}

export default function HeaderTableForm(props: HeaderTableFormProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        textTransform: "uppercase",
      }}
    >
      <h1>{props.title}</h1>
      <Button onClick={props.onClickRegisterButton} width="30%">
        CADASTRAR
      </Button>
    </div>
  );
}
