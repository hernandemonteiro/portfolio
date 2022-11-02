import React from "react";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import usePagination from "../../../../hooks/usePagination";
import useSkills from "../../../../hooks/useSkills";
import FormSkill from "../FormSkill";
import MessageForm from "../../../UI/MessageForm";
import HeaderTableForm from "../../../UI/HeaderTableForm";
import BaseTableForm from "../../../UI/BaseTableForm";
import styles from "./TableSkills.module.scss";

interface TableSkillsProps {
  data: any;
  title?: string;
}
export default function TableSkills(props: TableSkillsProps) {
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

  const { pagination, botaoMostrarMais } = usePagination(3, 3);

  if (message) {
    return <MessageForm message={message} />;
  } else {
    if (!viewForm) {
      return (
        <>
          <HeaderTableForm
            title={props.title}
            onClickRegisterButton={() => setForm(true)}
          />
          <BaseTableForm>
            {props.data.slice(0, pagination).map((element) => {
              return (
                <tr key={element._id}>
                  <td>
                    {element.skill} - {element.type}
                  </td>
                  <td className={styles.actions}>
                    <HiPencilAlt
                      onClick={() => {
                        setType(element.type);
                        setSkill(element.skill);
                        setIdSkill(element._id);
                        setForm(true);
                      }}
                      className={styles.actionIcon}
                    />
                    <HiOutlineTrash
                      onClick={() => deleteSkill(element._id)}
                      className={styles.actionIcon}
                    />
                  </td>
                </tr>
              );
            })}
          </BaseTableForm>
          {botaoMostrarMais(props.data.length)}
        </>
      );
    } else {
      return (
        <FormSkill
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
      );
    }
  }
}
