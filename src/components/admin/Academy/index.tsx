import React from "react";
import { iAcademy } from "./iAcademy";
import BaseTableForm from "../../ui/BaseTableForm";
import ElementOrForm from "../../ui/ElementOrForm";
import AcademyForm from "./AcademyForm";

export default function Academy(props: iAcademy) {
  return (
    <ElementOrForm
      changeViewFunction={props.changeViewFunction}
      element={
        <>
          <BaseTableForm title={"Academy"}>
            {props.academy.slice(0, props.pagination).map(props.TableContent)}
          </BaseTableForm>
          {props.buttonPagination}
        </>
      }
      form={
        <AcademyForm
          onSubmit={props.onSubmitForm}
          titleButtonSend={props.idExperience ? "SALVAR" : "CADASTRAR"}
          onChangeIdAcademy={props.setIdExperience}
          idAcademyValue={props.idExperience}
          onChangeCourse={props.setCourse}
          courseValue={props.course}
          onChangeFoundation={props.setFoundation}
          foundationValue={props.foundation}
          onChangeSinceCourse={props.setSince}
          sinceCourseValue={props.since}
          onChangeStatusCourse={props.setStatus}
          statusCourseValue={props.status}
        />
      }
      message={props.message}
    />
  );
}
