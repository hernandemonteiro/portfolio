import React from "react";
import useExperience from "../../../../hooks/useExperience";
import usePagination from "../../../../hooks/usePagination";
import BaseTableForm from "../../../ui/BaseTableForm";
import ContentTableForm from "../../../ui/BaseTableForm/ContentTableForm";
import ElementOrForm from "../../../ui/ElementOrForm";
import ExperienceForm from "../ExperienceForm";
import useView from "../../../../providers/view/viewContext";

interface ExperienceTableProps {
  experience: Array<{
    _id: string;
    title: string;
    since: number;
    until: number;
    company: string;
  }>;
}

export default function ExperienceTable(props: ExperienceTableProps) {
  const { setView } = useView();
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
                description={`${element.title} - ${element.since} - ${element.until} - ${element.company}`}
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
