import React from "react";
import FooterReactDocs from "../Footer";
import HeaderNextDocs from "../Header";
import MainReactDocs from "../Main";

export default function TemplateReactDocs({
  dirs,
  projectName,
  subDirs,
  children,
  backgroundColorDefined,
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <HeaderNextDocs
        backgroundColor={backgroundColorDefined}
        name={projectName}
      />
      <MainReactDocs dirs={dirs} subDirs={subDirs}>
        {children}
      </MainReactDocs>
      <FooterReactDocs backgroundColorDefined={backgroundColorDefined} />
    </div>
  );
}
