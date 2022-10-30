import React from "react";
import { Markup } from "react-render-markup";
import CardCurriculum from "../../components/AboutMe/CardCurriculum";
import CardHeaderCurriculum from "../../components/AboutMe/CardHeaderCurriculum";
import TemplateCurriculum from "../../components/AboutMe/Template";

// export async function getServerSideProps() {
//   // const dataFetch = await fetch(
//   //   `${process.env.NEXT_PUBLIC_URL_API}/api/about-me`
//   // );
//   // const aboutMe = await dataFetch.json();
//   // return { props: { aboutMe } };
// }

// export default function Artigo({ aboutMe }) {
  export default function Artigo() {
  return (
    <TemplateCurriculum>
        {/* <CardHeaderCurriculum name="Hernande Monteiro">
          <Markup markup={aboutMe.resume} />
        </CardHeaderCurriculum>
        <CardCurriculum title="Minha formação e meus cursos:">
          <Markup markup={aboutMe.academy} />
        </CardCurriculum>
        <CardCurriculum title="Soft-skills:">
          <Markup markup={aboutMe.softskills} />
        </CardCurriculum>
        <CardCurriculum title="Hard-skills:">
          <Markup markup={aboutMe.hardskills} />
        </CardCurriculum>
        <CardCurriculum title="Experiências:">
          <Markup markup={aboutMe.experience} />
        </CardCurriculum> */}
      </TemplateCurriculum>
  );
}
