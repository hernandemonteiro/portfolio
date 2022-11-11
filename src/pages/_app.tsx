import NextNProgress from "nextjs-progressbar";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/_app.scss";
import Head from "next/head";
import ComponentOrDocs from "nextDocs";
import { initialProps } from "nextDocs/core/initialProps";

function MyApp(props) {
  return (
    <>
      <NextNProgress />
      <Analytics />
      <Head>
        <title>Hernande Monteiro - seu blog tech quentinho e atual!</title>
        <meta
          name="description"
          content="Criado para inspirar o mundo do desenvolvimento!"
        />
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      <ComponentOrDocs
        properties={props}
        projectLogo={"Hernande Monteiro - Personal Blog"}
        github="https://github.com/hernandemonteiro/personal_blog"
        website="https://hernandemonteiro.vercel.app"
        instagram="https://instagram.com/monteiro.ops"
      />
    </>
  );
}

initialProps(MyApp);

export default MyApp;
