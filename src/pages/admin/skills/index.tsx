import React from "react";
import TableSkills from "../../../components/Admin/Skill/TableSkills";
import TemplateAdmin from "../../../components/Admin/TemplateAdmin";
import { fetchAPI } from "../../../helpers/fetchAPI";

export async function getServerSideProps() {
  const skills = await fetchAPI(`/api/skills`, "GET");
  return {
    props: {
      skills,
    },
  };
}
export default function SkillsPage({ skills }) {
  return (
    <TemplateAdmin>
      <TableSkills
        data={skills}
        title="Skills"
      />
    </TemplateAdmin>
  );
}
