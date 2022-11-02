import React from "react";
import InputDefault from "../../../UI/Inputs";
import BaseForm from "../../BaseForm";

interface ExperienceFormProps {
  onClickButtonCloseForm: () => void;
  onSubmit: (e) => void;
  onChangeOccupation: (e) => void;
  OccupationValue: string;
  onChangeCompany: (e) => void;
  CompanyValue: string;
  onChangeSinceYear: (e) => void;
  SinceValue: number;
  onChangeUntilYear: (e) => void;
  UntilValue: number;
  onChangeIdExperience: (e) => void;
  idExperienceValue: string | boolean;
  titleSendButton: string;
}

export default function ExperienceForm(props: ExperienceFormProps) {
  return (
    <BaseForm
      onSubmit={props.onSubmit}
      titleHeadForm={"Cadastrar Experience!"}
      titleButtonSubmit={props.titleSendButton}
      titleButtonCloseForm={"FECHAR FORMULARIO"}
      onClickButtonCloseForm={props.onClickButtonCloseForm}
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
