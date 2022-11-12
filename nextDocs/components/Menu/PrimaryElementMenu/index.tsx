import React from "react";
import { PrimaryElementMenuProps } from "./interface";

export default function PrimaryElementMenu(props: PrimaryElementMenuProps) {
  return (
    <>
      <hr />
      <a href={props.path} style={{ color: "black", margin: props.margin }}>
        {props.name}
      </a>
      <hr />
    </>
  );
}
