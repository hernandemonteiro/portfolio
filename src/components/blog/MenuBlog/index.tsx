import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaUserCircle, FaNewspaper } from "react-icons/fa";
import React, { useState } from "react";
import MenuIconLink from "../../ui/MenuIconLink";
import styles from "./MenuBlog.module.scss";
import ExternalLinkMenuBlog from "./ExternalLinkMenuBLog";

export default function MenuBlog(props: { children: React.ReactElement }) {
  const [menuView, setMenuView] = useState(false);

  function showHideMenu() {
    menuView ? setMenuView(false) : setMenuView(true);
  }

  return (
    <>
      {menuView ? (
        <nav className={styles.MenuBlog}>
          <div className={styles.MenuBlogContainer}>
            <hr />
            <MenuIconLink to="/">
              <FaNewspaper /> | Artigos
            </MenuIconLink>
            <hr />

            <hr />
            <MenuIconLink to="/about-me">
              <FaUserCircle fontSize={30} /> | Sobre Mim
            </MenuIconLink>
            <hr />

            {/* <hr/>
            <MenuIconLink to="/portfolio">
              <FontAwesomeIcon icon={faNewspaper} fixedWidth /> | Portfolio
            </MenuIconLink>
            <hr/> */}

            <h2>Social Networks</h2>

            <ExternalLinkMenuBlog
              icon={<AiOutlineGithub />}
              name={"Github"}
              link={"https://github.com/hernandemonteiro"}
            />
            <ExternalLinkMenuBlog
              icon={<AiFillInstagram />}
              name={"Instagram"}
              link={"https://www.instagram.com/monteiro.ops/"}
            />
            <ExternalLinkMenuBlog
              icon={<AiFillLinkedin />}
              name={"Linkedin"}
              link={"https://br.linkedin.com/in/hernande-monteiro"}
            />
          </div>
        </nav>
      ) : (
        <>{props.children}</>
      )}
      <button onClick={showHideMenu} className={styles.openCloseMenuBlog}>
        {menuView ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </>
  );
}
