import React from "react";
import AboutMePage from "../components/about-me/AboutMePage";
import Head from "next/head";

export default function Artigo() {
  return (
    <div className="Container">
      <Head>
        <title>
          Hernande Monteiro - Desenvolvedor Full-Stack {"("}React/NodeJS{")"}!
        </title>
        <meta
          name="description"
          content="Página de informações sobre o desenvolvedor Hernande Monteiro, suas habilidades técnicas, experiências e skills."
        />
        <meta name="robots" content="index, nofollow" />
      </Head>
      <AboutMePage />
    </div>
  );
}
