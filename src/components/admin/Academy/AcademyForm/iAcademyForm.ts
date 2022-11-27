export interface iAcademyForm {
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
