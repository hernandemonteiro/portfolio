import React from "react";
import MenuIconExternalLink from "../../../ui/MenuIconExternalLink";
import { iExternalLinkMenuBlog } from "../../../../interfaces/iExternalLinkMenuBlog";

function ExternalLinkMenuBlog(props: iExternalLinkMenuBlog) {
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
