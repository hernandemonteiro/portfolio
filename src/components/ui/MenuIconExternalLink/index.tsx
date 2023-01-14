import React from "react";
import MenuIcon from "../MenuIcon";

interface MenuIconLinkProps {
  children: any;
  to: string;
}
export default function MenuIconExternalLink(props: MenuIconLinkProps) {
  return (
    <MenuIcon>
      <a href={props.to} target="_blank" rel="noreferrer">
        {props.children}{" "}
      </a>
    </MenuIcon>
  );
}
