import React from "react";
import MenuIconExternalLink from "../../../ui/MenuIconExternalLink";

function ExternalLinkMenuBlog(props: {
  icon: React.ReactNode;
  name: string;
  link: string;
}) {
  return (
    <>
      <hr />
      <MenuIconExternalLink to={props.link}>
        {props.icon} | {props.name}
      </MenuIconExternalLink>
      <hr />
    </>
  );
}

export default ExternalLinkMenuBlog;
