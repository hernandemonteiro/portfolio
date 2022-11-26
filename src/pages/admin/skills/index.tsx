import React from "react";
import TableSkills from "../../../components/admin/Skill/TableSkills";
import TemplateAdmin from "../../../components/admin/TemplateAdmin";
import useSkills from "../../../hooks/useSkills";

export default function SkillsPage() {
  const { skillsList } = useSkills();
  return (
    <TemplateAdmin>
      <TableSkills data={skillsList} title="Skills" />
    </TemplateAdmin>
  );
}
