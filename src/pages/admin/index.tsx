import React from "react";
import CardHeaderCurriculum from "../../components/AboutMe/CardHeaderCurriculum";
import TemplateAdmin from "../../components/Admin/TemplateAdmin";
import ButtonDefault from "../../components/UI/Buttons";
import { fetchAPI } from "../../helpers/fetchAPI";

export async function getServerSideProps() {
  const ownerInfo = await fetchAPI(`/api/ownerInfo`, "GET");
  return { props: { ownerInfo } };
}

export default function InfosPage({ ownerInfo }) {
  console.log(ownerInfo)
  return (
    <TemplateAdmin>
      {ownerInfo.map((element) => (
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
      <ButtonDefault onClick={() => alert("Criar Form para alterar ownerInfo")}>Editar Informações</ButtonDefault>
    </TemplateAdmin>
  );
}
