import React from "react";
import AcademyTable from "../../../components/admin/Academy/AcademyTable";
import TemplateAdmin from "../../../components/admin/TemplateAdmin";
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
