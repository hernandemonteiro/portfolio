import InputDefault from "../../../ui/Inputs";
import BaseForm from "../../BaseForm";

interface AcademyFormProps {
  onSubmit: (e) => void;
  titleButtonSend: string;
  onChangeIdAcademy: (e) => void;
  idAcademyValue: string | boolean;
  onChangeCourse: (e) => void;
  courseValue: string;
  onChangeFoundation: (e) => void;
  foundationValue: string;
  onChangeSinceCourse: (e) => void;
  sinceCourseValue: string;
  onChangeStatusCourse: (e) => void;
  statusCourseValue: string;
}

export default function AcademyForm(props: AcademyFormProps) {
  return (
    <BaseForm
      onSubmit={props.onSubmit}
      titleHeadForm={"Cadastrar Experiência Acadêmica!"}
      titleButtonSubmit={props.titleButtonSend}
    >
      <InputDefault
        type="text"
        onChange={props.onChangeIdAcademy}
        value={props.idAcademyValue}
        hidden={true}
      />
      <InputDefault
        type="text"
        onChange={props.onChangeCourse}
        value={props.courseValue}
        required={true}
        label="Curso:"
      />
      <InputDefault
        type="text"
        onChange={props.onChangeFoundation}
        value={props.foundationValue}
        required={true}
        label="Instituição:"
      />
      <InputDefault
        type="date"
        onChange={props.onChangeSinceCourse}
        value={props.sinceCourseValue}
        required={true}
        label="Inicio:"
      />
      <InputDefault
        type="text"
        onChange={props.onChangeStatusCourse}
        value={props.statusCourseValue}
        required={true}
        label="Status:"
      />
    </BaseForm>
  );
}
