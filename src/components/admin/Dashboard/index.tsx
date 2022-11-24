import React from "react";
import CardHeaderCurriculum from "../../about-me/CardHeaderCurriculum";

export default function Dashoard(props) {
  return props.list.map((element) => (
    <CardHeaderCurriculum
      key={element._id}
      name={element.name}
      resume={element.resume}
      title={element.title}
      birthday={element.birthday}
      email={element.email}
      picture={element.picture}
    />
  ));
}
