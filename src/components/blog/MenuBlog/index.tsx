import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { faUser, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import MenuIconLink from "../../ui/MenuIconLink";
import styles from "./MenuBlog.module.scss";
import ExternalLinkMenuBlog from "./ExternalLinkMenuBLog";

export default function MenuBlog(props: { children: React.ReactElement }) {
  const [menuView, setMenuView] = useState(false);

  return (
    <>
      {menuView ? (
        <nav className={styles.MenuBlog}>
          <div className={styles.MenuBlogContainer}>
            <hr />
            <MenuIconLink to="/">
              <FontAwesomeIcon icon={faNewspaper} fixedWidth /> | Artigos
            </MenuIconLink>
            <hr />

            <hr />
            <MenuIconLink to="/about-me">
              <FontAwesomeIcon icon={faUser} fixedWidth /> | Sobre Mim
            </MenuIconLink>
            <hr />

            {/* <hr/>
            <MenuIconLink to="/portfolio">
              <FontAwesomeIcon icon={faNewspaper} fixedWidth /> | Portfolio
            </MenuIconLink>
            <hr/> */}

            <h2>Social Networks</h2>
            <ExternalLinkMenuBlog
              icon={<FontAwesomeIcon icon={faGithub} fixedWidth />}
              name={"Github"}
              link={"https://github.com/hernandemonteiro"}
            />
            <ExternalLinkMenuBlog
              icon={<FontAwesomeIcon icon={faInstagram} fixedWidth />}
              name={"Instagram"}
              link={"https://www.instagram.com/monteiro.ops/"}
            />
            <ExternalLinkMenuBlog
              icon={<FontAwesomeIcon icon={faLinkedin} fixedWidth />}
              name={"Linkedin"}
              link={"https://br.linkedin.com/in/hernande-monteiro"}
            />
          </div>
        </nav>
      ) : (
        <>{props.children}</>
      )}
      <button
        onClick={() => {
          menuView ? setMenuView(false) : setMenuView(true);
        }}
        className={styles.openCloseMenuBlog}
      >
        {menuView ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </>
  );
}
