import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Menu from "../../UI/Menu";
import MenuIconExternalLink from "../../UI/MenuIconExternalLink";
import MenuIconLink from "../../UI/MenuIconLink";

export default function MenuBlog() {
  return (
    <Menu>
      <MenuIconLink to="/">
        <FontAwesomeIcon
          icon={faBlog}
          fixedWidth
        />
      </MenuIconLink>

      <MenuIconLink to="/about-me">
        <FontAwesomeIcon
          icon={faUser}
          fixedWidth
        />
      </MenuIconLink>
      {/* <MenuIconLink to="/portfolio">
        <FontAwesomeIcon
          icon={faNewspaper}
          fixedWidth
        />
      </MenuIconLink> */}
      <MenuIconExternalLink to={"https://github.com/hernandemonteiro"}>
        <FontAwesomeIcon
          icon={faGithub}
          fixedWidth
        />
      </MenuIconExternalLink>
      <MenuIconExternalLink to="https://www.instagram.com/monteiro.ops/">
        <FontAwesomeIcon
          icon={faInstagram}
          fixedWidth
        />
      </MenuIconExternalLink>
      <MenuIconExternalLink to="https://br.linkedin.com/in/hernande-monteiro">
        <FontAwesomeIcon
          icon={faLinkedin}
          fixedWidth
        />
      </MenuIconExternalLink>
    </Menu>
  );
}
