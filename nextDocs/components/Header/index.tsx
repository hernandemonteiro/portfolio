import React from "react";
import { HeaderNextDocsProps } from "./interface";
import store from "store2";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { FiMoon, FiSun } from "react-icons/fi";

export default function HeaderNextDocs(props: HeaderNextDocsProps) {
  return props.customHeader ? (
    props.customHeader
  ) : (
    <header
      style={{
        display: "flex",
        // criar lógica paa mudar de cor conforme theme
        backgroundColor: "#3d3333" || "#070708",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2%",
        borderBottom: "1px solid rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          width: "50%",
        }}
      >
        <a
          href={"/docs"}
          style={{
            color: "white",
            textTransform: "uppercase",
          }}
        >
          {props.logo || "Your app name!"}
        </a>
      </div>

      <div
        style={{
          width: "50%",
          textAlign: "right",
          color: "white",
          fontSize: "1.5em",
        }}
      >
        {/* definir método para trocar dark light */}
        {/* {store("theme") === true && (
          <FiMoon
            style={{ margin: "1%" }}
            onClick={() => {
              store("theme", false);
              window.location.reload();
            }}
          />
        )}
        {store("theme") === false && (
          <FiSun
            style={{ margin: "1%" }}
            onClick={() => {
              store("theme", true);
              window.location.reload();
            }}
          />
        )} */}
        {props.github && (
          <a href={props.github} target="_blank" rel="noreferrer">
            <AiFillGithub style={{ margin: "1%" }} />
          </a>
        )}
        {props.facebook && (
          <a href={props.facebook} target="_blank" rel="noreferrer">
            <AiFillFacebook style={{ margin: "1%" }} />
          </a>
        )}
        {props.instagram && (
          <a href={props.instagram} target="_blank" rel="noreferrer">
            <AiFillInstagram style={{ margin: "1%" }} />
          </a>
        )}
        {props.linkedin && (
          <a href={props.linkedin} target="_blank" rel="noreferrer">
            <AiFillLinkedin style={{ margin: "1%" }} />
          </a>
        )}
        {props.discord && (
          <a href={props.discord} target="_blank" rel="noreferrer">
            <FaDiscord style={{ margin: "1%" }} />
          </a>
        )}
        {props.website && (
          <a href={props.website} target="_blank" rel="noreferrer">
            <GoBrowser style={{ margin: "1%" }} />
          </a>
        )}
      </div>
    </header>
  );
}
