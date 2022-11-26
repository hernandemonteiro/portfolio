import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { MdOutlineSearch } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { faBlog, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Menu from "../../ui/Menu";
import MenuIcon from "../../ui/MenuIcon";
import MenuIconExternalLink from "../../ui/MenuIconExternalLink";
import MenuIconLink from "../../ui/MenuIconLink";
import Router from "next/router";

export default function MenuBlog() {
  const [searchBar, setSearchBar] = useState(false);
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    Router.push(`/search/${search}`);
  }
  return (
    <Menu>
      {searchBar ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleSearch}
            style={{
              width: "93%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              required
              name="search"
              style={{ padding: "2%", width: "98%" }}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Article..."
              type="text"
            />
            <button
              style={{ background: "none", border: "none", paddingLeft: "2%" }}
              type="submit"
            >
              <MdOutlineSearch
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                  color: "white",
                }}
              />
            </button>
          </form>
          <MenuIcon>
            <AiFillCloseCircle onClick={() => setSearchBar(false)} />
          </MenuIcon>
        </div>
      ) : (
        <>
          <MenuIconLink to="/">
            <abbr title="Sobre Mim">
              <FontAwesomeIcon icon={faBlog} fixedWidth />
            </abbr>
          </MenuIconLink>
          <MenuIconLink to="/about-me">
            <abbr title="Sobre Mim">
              <FontAwesomeIcon icon={faUser} fixedWidth />
            </abbr>
          </MenuIconLink>
          {/* <MenuIconLink to="/portfolio">
        <FontAwesomeIcon
          icon={faNewspaper}
          fixedWidth
        />
      </MenuIconLink> */}
          <MenuIconExternalLink to={"https://github.com/hernandemonteiro"}>
            <abbr title="Meu GitHub*">
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </abbr>
          </MenuIconExternalLink>
          <MenuIconExternalLink to="https://www.instagram.com/monteiro.ops/">
            <abbr title="Meu Instagram*">
              <FontAwesomeIcon icon={faInstagram} fixedWidth />
            </abbr>
          </MenuIconExternalLink>
          <MenuIconExternalLink to="https://br.linkedin.com/in/hernande-monteiro">
            <abbr title="Meu Linkedin*">
              <FontAwesomeIcon icon={faLinkedin} fixedWidth />
            </abbr>
          </MenuIconExternalLink>
          <MenuIcon>
            <abbr title="Buscar Artigo*">
              <MdOutlineSearch
                className="searchBarButton"
                onClick={() => setSearchBar(true)}
              />
            </abbr>
          </MenuIcon>
        </>
      )}
    </Menu>
  );
}
