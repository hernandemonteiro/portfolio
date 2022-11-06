import React from "react";
import { Button } from "../../ui/Buttons";

interface BaseFormProps {
  onSubmit: (e) => void;
  children: any;
  titleHeadForm: string;
  titleButtonSubmit: string;
  titleButtonCloseForm: string;
  onClickButtonCloseForm: () => void;
}

export default function BaseForm(props: BaseFormProps) {
  return (
    <>
      <h1 style={{ textTransform: "uppercase", margin: "4%" }}>
        {props.titleHeadForm} <hr />
      </h1>
      <form onSubmit={props.onSubmit} style={{ width: "60%" }}>
        {props.children}
        <hr />
        <Button width="100%" type="submit">
          {props.titleButtonSubmit}
        </Button>
        <hr />
        <Button
          width="100%"
          type="button"
          onClick={props.onClickButtonCloseForm}
        >
          {props.titleButtonCloseForm}
        </Button>
        <hr />
      </form>
    </>
  );
}
