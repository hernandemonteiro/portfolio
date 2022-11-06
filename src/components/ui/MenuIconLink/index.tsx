import Link from "next/link";
import React from "react";
import MenuIcon from "../MenuIcon";

interface MenuIconLinkProps {
  children: any;
  to: string;
}
export default function MenuIconLink(props: MenuIconLinkProps) {
  return (
    <MenuIcon>
      <Link href={props.to}>{props.children}</Link>
    </MenuIcon>
  );
}
