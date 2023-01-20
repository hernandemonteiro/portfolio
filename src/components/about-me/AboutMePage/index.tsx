/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardCurriculum from "../CardCurriculum";
import CardHeaderCurriculum from "../CardHeaderCurriculum";
import styles from "./AboutMePage.module.scss";
import { iAboutMePage } from "../../../interfaces/iAboutMePage";

export default function AboutMePage(props: iAboutMePage) {
  return (
    <>
      {props.ownerInfo &&
        props.ownerInfo.map((element) => (
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
        <div className={styles.containerBox}>
          {props.academy &&
            props.academy.map((element) => {
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
        <div className={styles.skillsBox}>
          {props.skills &&
            props.skills
              .filter(({ type }) => type === "Soft-Skill")
              .map((element) => (
                <div className={styles.skillElement} key={element._id}>
                  {element.skill}
                </div>
              ))}
        </div>
      </CardCurriculum>
      <CardCurriculum title="Hard-skills:">
        <div className={styles.skillsBox}>
          {props.skills &&
            props.skills
              .filter(({ type }) => type === "Hard-Skill")
              .map((element) => (
                <div className={styles.skillElement} key={element._id}>
                  {element.skill}
                </div>
              ))}
        </div>
      </CardCurriculum>
      <CardCurriculum title="Experiências:">
        <div className={styles.containerBox}>
          {props.experience &&
            props.experience.map((element) => {
              return (
                <>
                  <p key={element.title}>
                    <b>{element.company}</b> - {element.title}
                  </p>
                  <img
                    width={100}
                    height={25}
                    alt={element.title + " picture"}
                    src={`http://img.shields.io/static/v1?label=${element.since}&message=${element.until}&color=&style=for-the-badge`}
                  />
                </>
              );
            })}
        </div>
      </CardCurriculum>
    </>
  );
}
