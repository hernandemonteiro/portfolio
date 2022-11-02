import React from "react";
import ButtonDefault from "../../../UI/Buttons";
import InputDefault from "../../../UI/Inputs";

interface FormSkillProps {
  onChangeIdSkill: (e) => void;
  valueIdSkill: string | boolean;
  onChangeType: (e) => void;
  valueType: string;
  onChangeSkill: (e) => void;
  valueSkill: string;
  onSubmit: (e) => void;
  viewForm: () => void;
}

export default function FormSkill(props: FormSkillProps) {
  return (
    <>
      <h1 style={{ textTransform: "uppercase", margin: "4%" }}>
        Cadastrar skill <hr />
      </h1>
      <form onSubmit={props.onSubmit} style={{ width: "60%" }}>
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
        <hr />
        <ButtonDefault width="100%" type="submit">
          CADASTRAR
        </ButtonDefault>
        <hr />
        <ButtonDefault width="100%" type="button" onClick={props.viewForm}>
          FECHAR FORMULÁRIO
        </ButtonDefault>
        <hr />
      </form>
    </>
  );
}
