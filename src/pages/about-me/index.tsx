/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutMePage from "../../components/about-me/AboutMePage";
import TemplateAboutMe from "../../components/about-me/TemplateAboutMe";
import MenuBlog from "../../components/blog/MenuBlog";
import { fetchAPI } from "../../hooks/helpers/fetchAPI";

export async function getServerSideProps() {
  const skills = await fetchAPI(`/api/skills`, "GET");

  const experience = await fetchAPI(`/api/experience`, "GET");
  const academy = await fetchAPI(`/api/academy`, "GET");
  const ownerInfo = await fetchAPI(`/api/ownerInfo`, "GET");
  return { props: { skills, experience, academy, ownerInfo } };
}

export default function Artigo(props: {
  ownerInfo: any;
  academy: any;
  skills: any;
  experience: any;
}) {
  return (
    <TemplateAboutMe>
      <>
        <AboutMePage
          ownerInfo={props.ownerInfo}
          academy={props.academy}
          skills={props.skills}
          experience={props.experience}
        />
        <MenuBlog />
      </>
    </TemplateAboutMe>
  );
}
