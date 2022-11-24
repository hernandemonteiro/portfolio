import React from "react";
import InputDefault from "../../../ui/Inputs";
import BaseForm from "../../BaseForm";

interface FormSkillProps {
  onChangeIdSkill: (e) => void;
  valueIdSkill: string | boolean;
  onChangeType: (e) => void;
  valueType: string;
  onChangeSkill: (e) => void;
  valueSkill: string;
  onSubmit: (e) => void;
  viewForm: () => void;
  titleSendButton: string;
}

export default function FormSkill(props: FormSkillProps) {
  return (
    <BaseForm
      onSubmit={props.onSubmit}
      titleHeadForm={"Cadastrar skill"}
      titleButtonSubmit={props.titleSendButton}
    >
      <InputDefault
        type="text"
        onChange={props.onChangeIdSkill}
        value={props.valueIdSkill}
        hidden={true}
      />
      <select
        style={{
          width: "100%",
          padding: "2%",
          textAlign: "center",
          marginBottom: "5%",
          fontSize: "1rem",
        }}
        required
        value={props.valueType}
        onChange={props.onChangeType}
      >
        <option value="">SELECIONE O TIPO DE SKILL</option>
        <option>Hard-Skill</option>
        <option>Soft-Skill</option>
      </select>
      <InputDefault
        required={true}
        type="text"
        onChange={props.onChangeSkill}
        value={props.valueSkill}
        placeholder="Digite sua skill!"
        label="SKILL"
      />
    </BaseForm>
  );
}
