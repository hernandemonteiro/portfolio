import React from "react";
import useAcademy from "../../../../hooks/useAcademy";
import usePagination from "../../../../hooks/usePagination";
import BaseTableForm from "../../../UI/BaseTableForm";
import ContentTableForm from "../../../UI/BaseTableForm/ContentTableForm";
import TableOrMessageOrForm from "../../TableOrMessageOrForm";
import AcademyForm from "../AcademyForm";

interface AcademyTableProps {
  academy: any;
}

export default function AcademyTable(props: AcademyTableProps) {
  const {pagination, botaoMostrarMais} = usePagination(5, 5);
  const {
    setViewForm,
    viewForm,
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
    <TableOrMessageOrForm
      view={viewForm}
      table={
        <>
        <BaseTableForm
          title={"Academy"}
          onClickRegisterButton={() => setViewForm(true)}
        >
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
                setViewForm(true);
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
          onClickButtonCloseForm={() => {
            setIdExperience(false);
            setCourse("");
            setFoundation("");
            setSince("");
            setStatus("");
            setViewForm(false);
          }}
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
