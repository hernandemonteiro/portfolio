import React from "react";
import TemplateReactDocs from "./components/Template";
import { useRouter } from "next/router";

export default function ComponentOrDocs(props) {
  const route = useRouter();
  return (
    <>
      {route.asPath.match("/docs") ? (
        <TemplateReactDocs
          dirs={props.properties.navDir}
          subDirs={props.properties.dirs}
          projectLogo={props.projectLogo}
          disabledIndexMenu={props.disabledIndexMenu}
          customFooter={props.customFooter}
          customHeader={props.customHeader}
          github={props.github}
          facebook={props.facebook}
          instagram={props.instagram}
          linkedin={props.linkedin}
          discord={props.discord}
          website={props.website}
        >
          <props.properties.Component {...props.properties.pageProps} />
        </TemplateReactDocs>
      ) : (
        <props.properties.Component {...props.properties.pageProps} />
      )}
    </>
  );
}
