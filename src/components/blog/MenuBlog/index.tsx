import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { faUser, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import MenuIconExternalLink from "../../ui/MenuIconExternalLink";
import MenuIconLink from "../../ui/MenuIconLink";

export default function MenuBlog(props: { children: React.ReactElement }) {
  const [menuView, setMenuView] = useState(false);

  return (
    <>
      {menuView ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            top: "0",
            width: "100%",
            backgroundColor: "rgb(24, 24, 24)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
              flexDirection: "column",
              width: "70vw",
              textAlign: "center",
              color: "white",
            }}
          >
            <hr style={{ width: "100%" }} />
            <MenuIconLink to="/">
              <FontAwesomeIcon icon={faNewspaper} fixedWidth /> | Artigos
            </MenuIconLink>
            <hr style={{ width: "100%" }} />

            <hr style={{ width: "100%" }} />
            <MenuIconLink to="/about-me">
              <FontAwesomeIcon icon={faUser} fixedWidth /> | Sobre Mim
            </MenuIconLink>
            <hr style={{ width: "100%" }} />

            {/* <hr style={{ width: "100%" }} />
            <MenuIconLink to="/portfolio">
              <FontAwesomeIcon icon={faNewspaper} fixedWidth /> | Portfolio
            </MenuIconLink>
            <hr style={{ width: "100%" }} /> */}

            <h2>Social Networks</h2>
            <hr style={{ width: "100%" }} />
            <MenuIconExternalLink to={"https://github.com/hernandemonteiro"}>
              <FontAwesomeIcon icon={faGithub} fixedWidth /> | Github
            </MenuIconExternalLink>
            <hr style={{ width: "100%" }} />

            <hr style={{ width: "100%" }} />
            <MenuIconExternalLink to="https://www.instagram.com/monteiro.ops/">
              <FontAwesomeIcon icon={faInstagram} fixedWidth /> | Instagram
            </MenuIconExternalLink>
            <hr style={{ width: "100%" }} />

            <hr style={{ width: "100%" }} />
            <MenuIconExternalLink to="https://br.linkedin.com/in/hernande-monteiro">
              <FontAwesomeIcon icon={faLinkedin} fixedWidth /> | Linkedin
            </MenuIconExternalLink>
            <hr style={{ width: "100%" }} />
          </div>
        </div>
      ) : (
        <>{props.children}</>
      )}
      <button
        onClick={() => {
          menuView ? setMenuView(false) : setMenuView(true);
        }}
        style={{
          display: "flex",
          padding: "1.5%",
          borderRadius: "50%",
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: "1000",
          fontSize: "2em",
          cursor: "pointer",
          color: "white",
          backgroundColor: "gray",
          border: "none",
        }}
      >
        {menuView ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </>
  );
}
