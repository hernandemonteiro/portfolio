import React from "react";
import MenuIcon from "../MenuIcon";
import { iMenuIconLink } from "../../../interfaces/iMenuIconLink";

export default function MenuIconExternalLink(props: iMenuIconLink) {
  return (
    <MenuIcon>
      <a href={props.to} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    </MenuIcon>
  );
}
