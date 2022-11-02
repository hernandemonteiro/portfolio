import React from "react";

interface MessageSkillProps {
  message: string;
}
export default function MessageSkill(props: MessageSkillProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "uppercase",
      }}
    >
      <h2>{props.message}</h2>
    </div>
  );
}
