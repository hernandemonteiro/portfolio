import Link from "next/link";
import React from "react";
import MenuIcon from "../MenuIcon";
import { iMenuIconLink } from "../../../interfaces/iMenuIconLink";
import styles from "../MenuIconExternalLink/MenuIconLink.module.scss";

export default function MenuIconLink(props: iMenuIconLink) {
  return (
    <MenuIcon>
      <Link href={props.to} className={styles.LinkMenu}>{props.children}</Link>
    </MenuIcon>
  );
}
