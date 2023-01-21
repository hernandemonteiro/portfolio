import Link from "next/link";
import React from "react";
import MenuIcon from "../MenuIcon";
import { iMenuIconLink } from "../../../interfaces/iMenuIconLink";

export default function MenuIconLink(props: iMenuIconLink) {
  return (
    <MenuIcon>
      <Link href={props.to}>{props.children}</Link>
    </MenuIcon>
  );
}
