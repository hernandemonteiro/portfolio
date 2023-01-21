import React from "react";
import { Button } from "../../ui/Buttons";
import { iBaseForm } from "../../../interfaces/iBaseForm";

export default function BaseForm(props: iBaseForm) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textTransform: "uppercase", margin: "4%" }}>
        {props.titleHeadForm} <hr />
      </h1>
      <form
        onSubmit={props.onSubmit}
        style={{ width: "60%", textAlign: "left" }}
      >
        {props.children}
        <hr />
        <Button width="100%" type="submit">
          {props.titleButtonSubmit}
        </Button>
      </form>
    </div>
  );
}
