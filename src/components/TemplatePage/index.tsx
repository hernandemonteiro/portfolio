import React from 'react';
import { BackgroundStars } from '../BackgroundStars';
import HomeMenu from '../HomeMenu';
import Head from 'next/head';
import { iTemplatePage } from '../../interfaces/iTemplatePage';

function TemplatePage(props: iTemplatePage) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="robots" content="index, follow" />
      </Head>
      <BackgroundStars />
      <div className="Container">
        <main>
          {props.HomeMenu && <HomeMenu>{props.children}</HomeMenu>}
          {!props.HomeMenu && props.children}
        </main>
      </div>
    </>
  );
}

export default TemplatePage;
