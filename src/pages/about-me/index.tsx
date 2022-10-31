/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import CardCurriculum from "../../components/AboutMe/CardCurriculum";
import CardHeaderCurriculum from "../../components/AboutMe/CardHeaderCurriculum";
import TemplateCurriculum from "../../components/AboutMe/Template";
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
      {ownerInfo.map((element) => (
        <CardHeaderCurriculum
          key={element._id}
          name={element.name}
          resume={element.resume}
          title={element.title}
          birthday={element.birthday}
          email={element.email}
          picture={element.picture}
        />
      ))}

      <CardCurriculum title="Formações e Idiomas:">
        <div style={{ padding: "2%" }}>
          {academy.map((element) => {
            return (
              <>
                <p>
                  <b>{element.title}</b> - {element.foundation}
                </p>
                <img
                  alt={element.title + " picture"}
                  src={`http://img.shields.io/static/v1?label=${element.since}&message=${element.status}&color=&style=for-the-badge`}
                />
              </>
            );
          })}
        </div>
      </CardCurriculum>
      <CardCurriculum title="Soft-skills:">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {skills.map((element) => {
            if (element.type === "Soft-Skill") {
              return (
                <div
                  style={{
                    padding: "2%",
                    margin: "1.5%",
                    fontSize: "1.7em",
                    backgroundColor: "rgb(24, 24, 24)",
                    color: "white",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                  key={element._id}
                >
                  {element.skill}
                </div>
              );
            }
          })}
        </div>
      </CardCurriculum>
      <CardCurriculum title="Hard-skills:">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {skills.map((element) => {
            if (element.type === "Hard-Skill") {
              return (
                <div
                  style={{
                    padding: "2%",
                    margin: "1.5%",
                    fontSize: "1.7em",
                    backgroundColor: "rgb(24, 24, 24)",
                    color: "white",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                  key={element._id}
                >
                  {element.skill}
                </div>
              );
            }
          })}
        </div>
      </CardCurriculum>
      <CardCurriculum title="Experiências:">
        <div style={{ padding: "2%" }}>
          {experience.map((element) => {
            return (
              <>
                <p>
                  <b>{element.company}</b> - {element.title}
                </p>
                <img
                  alt={element.title + " picture"}
                  src={`http://img.shields.io/static/v1?label=${element.since}&message=${element.until}&color=&style=for-the-badge`}
                />
              </>
            );
          })}
        </div>
      </CardCurriculum>
    </TemplateCurriculum>
  );
}
