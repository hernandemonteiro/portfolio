import React, { useContext, useState } from "react";
import useExperience from "../../../../hooks/useExperience";
import usePagination from "../../../../hooks/usePagination";
import ViewContext from "../../../../providers/viewContext";
import BaseTableForm from "../../../ui/BaseTableForm";
import ContentTableForm from "../../../ui/BaseTableForm/ContentTableForm";
import ElementOrForm from "../../../ui/ElementOrForm";
import ExperienceForm from "../ExperienceForm";

interface ExperienceTableProps {
  experience: any;
}

export default function ExperienceTable(props: ExperienceTableProps) {
  const { view, setView } = useContext(ViewContext);
  const { pagination, botaoMostrarMais } = usePagination(5, 5);
  const {
    message,
    handleExperienceForm,
    setIdExperience,
    idExperience,
    setOccupation,
    occupation,
    setCompany,
    company,
    setSinceYear,
    sinceYear,
    setUntilYear,
    untilYear,
    deleteExperience,
  } = useExperience();
  return (
    <ElementOrForm
      element={
        <>
          <BaseTableForm title={"Experiences"}>
            {props.experience.slice(0, pagination).map((element) => (
              <ContentTableForm
                key={element._id}
                description={`${element.title} - ${element.since.substr(
                  0,
                  4
                )} - ${element.until.substr(0, 4)}- ${element.company}`}
                onClickEdit={() => {
                  setIdExperience(element._id);
                  setOccupation(element.title);
                  setCompany(element.company);
                  setSinceYear(element.since);
                  setUntilYear(element.until);
                  setView(true);
                }}
                onClickTrash={() => deleteExperience(element._id)}
              />
            ))}
          </BaseTableForm>
          {botaoMostrarMais(props.experience.length)}
        </>
      }
      form={
        <ExperienceForm
          titleSendButton={idExperience ? "SALVAR" : "CADASTRAR"}
          onSubmit={handleExperienceForm}
          onChangeOccupation={(e) => setOccupation(e.target.value)}
          OccupationValue={occupation}
          onChangeCompany={(e) => setCompany(e.target.value)}
          CompanyValue={company}
          onChangeSinceYear={(e) => setSinceYear(e.target.value)}
          SinceValue={sinceYear}
          onChangeUntilYear={(e) => setUntilYear(e.target.value)}
          UntilValue={untilYear}
          onChangeIdExperience={(e) => setIdExperience(e.target.value)}
          idExperienceValue={idExperience}
        />
      }
      message={message}
    />
  );
}
