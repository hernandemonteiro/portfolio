import React from "react";
import InputDefault from "../../../ui/Inputs";
import BaseForm from "../../BaseForm";
import { iExperienceForm } from "../../../../interfaces/iExperienceForm";

export default function ExperienceForm(props: iExperienceForm) {
  return (
    <BaseForm
      onSubmit={props.onSubmit}
      titleHeadForm={"Cadastrar Experience!"}
      titleButtonSubmit={props.titleSendButton}
    >
      <InputDefault
        hidden={true}
        required={true}
        type="text"
        value={props.idExperienceValue}
        onChange={props.onChangeIdExperience}
      />
      <InputDefault
        required={true}
        type="text"
        value={props.OccupationValue}
        onChange={props.onChangeOccupation}
        label="Função Desempenhada:"
      />
      <InputDefault
        required={true}
        type="text"
        value={props.CompanyValue}
        onChange={props.onChangeCompany}
        label="Empresa:"
      />
      <InputDefault
        required={true}
        type="date"
        value={props.SinceValue}
        onChange={props.onChangeSinceYear}
        label="Ano de inicio:"
      />
      <InputDefault
        required={true}
        type="date"
        min={props.SinceValue}
        value={props.UntilValue}
        onChange={props.onChangeUntilYear}
        label="Ano de saida:"
      />
    </BaseForm>
  );
}
