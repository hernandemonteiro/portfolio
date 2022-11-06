import React from "react";
import CardHeaderCurriculum from "../../components/about-me/CardHeaderCurriculum";
import TemplateAdmin from "../../components/admin/TemplateAdmin";
import { Button } from "../../components/ui/Buttons";
import { fetchAPI } from "../../helpers/fetchAPI";

export async function getServerSideProps() {
  const ownerInfo = await fetchAPI(`/api/ownerInfo`, "GET");
  return { props: { ownerInfo } };
}

export default function InfosPage({ ownerInfo }) {
  console.log(ownerInfo);
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
      <Button onClick={() => alert("Criar Form para alterar ownerInfo")}>
        Editar Informações
      </Button>
    </TemplateAdmin>
  );
}
