import React from "react";
import usePagination from "../../../../hooks/usePagination";
import useSkills from "../../../../hooks/useSkills";
import FormSkill from "../FormSkill";
import MessageForm from "../../../UI/MessageForm";
import BaseTableForm from "../../../UI/BaseTableForm";
import ContentTableForm from "../../../UI/BaseTableForm/ContentTableForm";
import TableOrMessageOrForm from "../../TableOrMessageOrForm";

interface TableSkillsProps {
  data: any;
  title?: string;
}
export default function TableSkills(props: TableSkillsProps) {
  const { pagination, botaoMostrarMais } = usePagination(3, 3);
  const {
    setType,
    type,
    setSkill,
    skill,
    setIdSkill,
    idSkill,
    deleteSkill,
    handleSkillForm,
    message,
    setForm,
    viewForm,
  } = useSkills();

  return (
    <TableOrMessageOrForm
      view={viewForm}
      table={
        <>
          <BaseTableForm
            title={"Skills"}
            onClickRegisterButton={() => setForm(true)}
          >
            {props.data.slice(0, pagination).map((element) => (
              <ContentTableForm
                key={element._id}
                description={element.skill + " - " + element.type}
                onClickEdit={() => {
                  setType(element.type);
                  setSkill(element.skill);
                  setIdSkill(element._id);
                  setForm(true);
                }}
                onClickTrash={() => deleteSkill(element._id)}
              />
            ))}
          </BaseTableForm>
          {botaoMostrarMais(props.data.length)}
        </>
      }
      form={
        <FormSkill
          titleSendButton={idSkill ? "SALVAR" : "CADASTRAR"}
          onChangeType={(e) => setType(e.target.value)}
          valueType={type}
          onChangeSkill={(e) => setSkill(e.target.value)}
          valueSkill={skill}
          onChangeIdSkill={(e) => setIdSkill(e.target.value)}
          valueIdSkill={idSkill}
          onSubmit={(e) => handleSkillForm(e)}
          viewForm={() => {
            setForm(false);
            setType("");
            setSkill("");
            setIdSkill("");
          }}
        />
      }
      message={message}
    />
  );
}
