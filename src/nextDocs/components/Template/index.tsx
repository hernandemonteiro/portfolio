import React from "react";
import FooterReactDocs from "../Footer";
import HeaderNextDocs from "../Header";
import MainReactDocs from "../Main";
import { TemplateReactDocsProps } from "./interface";

export default function TemplateReactDocs(props: TemplateReactDocsProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <HeaderNextDocs
        logo={props.projectLogo}
        customHeader={props.customHeader}
        github={props.github}
        facebook={props.facebook}
        instagram={props.instagram}
        linkedin={props.linkedin}
        discord={props.discord}
        website={props.website}
      />
      <MainReactDocs
        dirs={props.dirs}
        subDirs={props.subDirs}
        disabledIndexMenu={props.disabledIndexMenu}
      >
        {props.children}
      </MainReactDocs>
      <FooterReactDocs
        customFooter={props.customFooter}
      />
    </div>
  );
}
