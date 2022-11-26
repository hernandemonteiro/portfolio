import React, { useContext } from "react";
import usePagination from "../../../../hooks/usePagination";
import useSkills from "../../../../hooks/useSkills";
import FormSkill from "../FormSkill";
import MessageForm from "../../../ui/MessageForm";
import BaseTableForm from "../../../ui/BaseTableForm";
import ContentTableForm from "../../../ui/BaseTableForm/ContentTableForm";
import ElementOrForm from "../../../ui/ElementOrForm";
import ViewContext from "../../../../providers/viewContext";

interface TableSkillsProps {
  data: any;
  title?: string;
}
export default function TableSkills(props: TableSkillsProps) {
  const { view, setView } = useContext(ViewContext);
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
  } = useSkills();

  return (
    <ElementOrForm
      element={
        <>
          <BaseTableForm title={"Skills"}>
            {props.data.slice(0, pagination).map((element) => (
              <ContentTableForm
                key={element._id}
                description={element.skill + " - " + element.type}
                onClickEdit={() => {
                  setType(element.type);
                  setSkill(element.skill);
                  setIdSkill(element._id);
                  setView(true)
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
