/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutMePage from "../../components/about-me/AboutMePage";
import CardCurriculum from "../../components/about-me/CardCurriculum";
import CardHeaderCurriculum from "../../components/about-me/CardHeaderCurriculum";
import TemplateCurriculum from "../../components/about-me/Template";
import MenuBlog from "../../components/blog/Menu";
import { fetchAPI } from "../../helpers/fetchAPI";

export async function getServerSideProps() {
  const skills = await fetchAPI(`/api/skills`, "GET");

  const experience = await fetchAPI(`/api/experience`, "GET");
  const academy = await fetchAPI(`/api/academy`, "GET");
  const ownerInfo = await fetchAPI(`/api/ownerInfo`, "GET");
  return { props: { skills, experience, academy, ownerInfo } };
}

export default function Artigo({ skills, experience, academy, ownerInfo }) {
  return (
    <TemplateCurriculum>
      <AboutMePage
        ownerInfo={ownerInfo}
        academy={academy}
        skills={skills}
        experience={experience}
      />
      <MenuBlog />
    </TemplateCurriculum>
  );
}