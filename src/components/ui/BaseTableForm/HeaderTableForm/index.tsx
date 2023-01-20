import React from "react";
import { iHeaderTableForm } from "../../../../interfaces/iHeaderTableForm";

export default function HeaderTableForm(props: iHeaderTableForm) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "left",
        textTransform: "uppercase",
      }}
    >
      <h1>{props.title}</h1>
    </div>
  );
}
