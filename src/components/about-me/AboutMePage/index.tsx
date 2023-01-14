/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardCurriculum from "../CardCurriculum";
import CardHeaderCurriculum from "../CardHeaderCurriculum";
import { iAboutMePage } from "./iAboutMePage";

export default function AboutMePage(props: iAboutMePage) {
  return (
    <>
      {props.ownerInfo.map((element) => (
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
        <div style={{ width: "100%", padding: "2%" }}>
          {props.academy.map((element) => {
            return (
              <>
                <p key={element.title}>
                  <b>{element.title}</b> - {element.foundation}
                </p>
                <img
                  width={100}
                  height={20}
                  alt={element.title + " picture"}
                  src={`http://img.shields.io/static/v1?label=${element.since.substr(
                    0,
                    4
                  )}&message=${element.status}&color=&style=for-the-badge`}
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
          {props.skills.map(
            (element) =>
              element.type === "Soft-Skill" && (
                <div
                  style={{
                    padding: "2%",
                    margin: "1.5%",
                    fontSize: "1.3em",
                    backgroundColor: "rgb(24, 24, 24)",
                    color: "white",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                  key={element._id}
                >
                  {element.skill}
                </div>
              )
          )}
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
          {props.skills.map(
            (element) =>
              element.type === "Hard-Skill" && (
                <div
                  style={{
                    padding: "2%",
                    margin: "1.5%",
                    fontSize: "1.3em",
                    backgroundColor: "rgb(24, 24, 24)",
                    color: "white",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                  key={element._id}
                >
                  {element.skill}
                </div>
              )
          )}
        </div>
      </CardCurriculum>
      <CardCurriculum title="Experiências:">
        <div style={{ width: "100%", padding: "2%" }}>
          {props.experience.map((element) => {
            return (
              <>
                <p key={element.title}>
                  <b>{element.company}</b> - {element.title}
                </p>
                <img
                  width={100}
                  height={25}
                  alt={element.title + " picture"}
                  src={`http://img.shields.io/static/v1?label=${element.since.substr(
                    0,
                    4
                  )}&message=${element.until.substr(
                    0,
                    4
                  )}&color=&style=for-the-badge`}
                />
              </>
            );
          })}
        </div>
      </CardCurriculum>
    </>
  );
}
