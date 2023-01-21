import React from "react";
import MenuIcon from "../MenuIcon";
import { iMenuIconLink } from "../../../interfaces/iMenuIconLink";
import styles from "./MenuIconLink.module.scss";

export default function MenuIconExternalLink(props: iMenuIconLink) {
  return (
    <MenuIcon>
      <a
        href={props.to}
        target="_blank"
        className={styles.LinkMenu}
        rel="noreferrer"
      >
        {props.children}
      </a>
    </MenuIcon>
  );
}
