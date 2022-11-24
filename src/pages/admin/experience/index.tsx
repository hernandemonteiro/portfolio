import React from "react";
import ExperienceTable from "../../../components/admin/Experience/ExperienceTable";
import TemplateAdmin from "../../../components/admin/TemplateAdmin";
import useExperience from "../../../hooks/useExperience";

export default function ExperincePage() {
  const { experienceList } = useExperience();
  return (
    <TemplateAdmin>
      <ExperienceTable experience={experienceList} />
    </TemplateAdmin>
  );
}
