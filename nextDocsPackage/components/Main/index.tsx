import React from "react";
import MenuReactDocs from "../Menu";

export default function MainReactDocs({children, dirs, subDirs}){
return (
    <main
    style={{
      display: "flex",
      width: "100%",
      height: "90vh",
      backgroundColor: "#706d6d"
    }}
  >
    <MenuReactDocs subDirs={subDirs} dirs={dirs} />
    <div
      style={{
        width: "77%",
        minHeight: "90vh",
        overflow: "auto",
        backgroundColor: "white",
        padding: "2%",
      }}
    >
      {children}
    </div>
  </main>
)
}