import React from "react";

interface HeaderTableFormProps {
  title: string;
}

export default function HeaderTableForm(props: HeaderTableFormProps) {
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
