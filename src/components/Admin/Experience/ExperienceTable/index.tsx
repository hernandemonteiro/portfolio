import React, { useState } from "react";
import useExperience from "../../../../hooks/useExperience";
import BaseTableForm from "../../../UI/BaseTableForm";
import ContentTableForm from "../../../UI/BaseTableForm/ContentTableForm";
import TableOrMessageOrForm from "../../TableOrMessageOrForm";
import ExperienceForm from "../ExperienceForm";

interface ExperienceTableProps {
  experience: any;
}

export default function ExperienceTable(props: ExperienceTableProps) {
  const {
    viewForm,
    setViewForm,
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
    <TableOrMessageOrForm
      view={viewForm}
      table={
        <BaseTableForm
          title={"Experiences"}
          onClickRegisterButton={() => setViewForm(true)}
        >
          {props.experience.map((element) => (
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
                setViewForm(true);
              }}
              onClickTrash={() => deleteExperience(element._id)}
            />
          ))}
        </BaseTableForm>
      }
      form={
        <ExperienceForm
        titleSendButton={idExperience ? "SALVAR" : "CADASTRAR"} 
              onClickButtonCloseForm={() => {
                  setIdExperience(false);
                  setOccupation("");
                  setCompany("");
                  setSinceYear(0);
                  setUntilYear(0);
                  setViewForm(false);
              } }
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
              idExperienceValue={idExperience}       />
      }
      message={message}
    />
  );
}
