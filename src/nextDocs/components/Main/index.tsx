import React from "react";
import MenuReactDocs from "../Menu";
import { MainReactDocsProps } from "./interface";

export default function MainReactDocs(props: MainReactDocsProps) {
  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: "92vh",
        zIndex: 1,
        backgroundColor: "white" || "#0e0f12",
      }}
    >
      {props.disabledIndexMenu === true ? (
        ""
      ) : (
        <MenuReactDocs subDirs={props.subDirs} dirs={props.dirs} />
      )}
      <div
        style={{
          width: props.disabledIndexMenu === true ? "100%" : "77%",
          minHeight: "90vh",
          overflow: "auto",
          padding: "2%",
        }}
      >
        {props.children}
      </div>
    </main>
  );
}
