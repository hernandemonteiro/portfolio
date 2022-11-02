import React from "react";
import ExperienceTable from "../../../components/Admin/Experience/ExperienceTable";
import TemplateAdmin from "../../../components/Admin/TemplateAdmin";
import { fetchAPI } from "../../../helpers/fetchAPI";

export async function getServerSideProps() {
  const experiences = await fetchAPI("/api/experience", "GET");
  return {
    props: {
      experiences,
    },
  };
}
export default function ExperincePage({ experiences }) {
  return (
    <TemplateAdmin>
      <ExperienceTable experience={experiences} />
    </TemplateAdmin>
  );
}
