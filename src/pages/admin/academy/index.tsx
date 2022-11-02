import React from "react";
import AcademyTable from "../../../components/Admin/Academy/AcademyTable";
import TemplateAdmin from "../../../components/Admin/TemplateAdmin";
import { fetchAPI } from "../../../helpers/fetchAPI";

export async function getServerSideProps(){
  const academys = await fetchAPI("/api/academy", "GET");
  return {
    props: {
      academys
    }
  }
}
export default function AcademyPage({academys}) {
  return (
    <TemplateAdmin>
      <AcademyTable academy={academys}/>
    </TemplateAdmin>
  );
}
