import React, { useContext } from "react";
import useAcademy from "../../../hooks/useAcademy";
import usePagination from "../../../hooks/usePagination";
import ViewContext from "../../../providers/viewContext";
import BaseTableForm from "../../ui/BaseTableForm";
import ContentTableForm from "../../ui/BaseTableForm/ContentTableForm";
import ElementOrForm from "../../ui/ElementOrForm";
import AcademyForm from "./AcademyForm";

interface AcademyProps {
  academy: any;
}

export default function Academy(props: AcademyProps) {
  const { view, setView } = useContext(ViewContext);
  const { pagination, botaoMostrarMais } = usePagination(5, 5);
  const {
    message,
    handleAcademyForm,
    deleteAcademy,
    setIdExperience,
    idExperience,
    setCourse,
    course,
    setFoundation,
    foundation,
    setSince,
    since,
    setStatus,
    status,
  } = useAcademy();

  return (
    <ElementOrForm
      element={
        <>
          <BaseTableForm title={"Academy"}>
            {props.academy.slice(0, pagination).map((element) => (
              <ContentTableForm
                key={element._id}
                description={`${element.title} - ${element.since} - 
          ${element.status} - ${element.foundation}`}
                onClickEdit={() => {
                  setIdExperience(element._id);
                  setCourse(element.title);
                  setFoundation(element.foundation);
                  setSince(element.since);
                  setStatus(element.status);
                  setView(true);
                }}
                onClickTrash={() => deleteAcademy(element._id)}
              />
            ))}
          </BaseTableForm>
          {botaoMostrarMais(props.academy.length)}
        </>
      }
      form={
        <AcademyForm
          onSubmit={handleAcademyForm}
          titleButtonSend={idExperience ? "SALVAR" : "CADASTRAR"}
          onChangeIdAcademy={(e) => setIdExperience(e.target.value)}
          idAcademyValue={idExperience}
          onChangeCourse={(e) => setCourse(e.target.value)}
          courseValue={course}
          onChangeFoundation={(e) => setFoundation(e.target.value)}
          foundationValue={foundation}
          onChangeSinceCourse={(e) => setSince(e.target.value)}
          sinceCourseValue={since}
          onChangeStatusCourse={(e) => setStatus(e.target.value)}
          statusCourseValue={status}
        />
      }
      message={message}
    />
  );
}
