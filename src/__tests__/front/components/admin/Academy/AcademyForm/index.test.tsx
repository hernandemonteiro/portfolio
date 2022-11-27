import { describe, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import AcademyForm from "../../../../../../components/admin/Academy/AcademyForm";

describe("<AcademyForm/> test", () => {
  const functionMock = (e) => {
    jest.fn();
  };
  it("<AcademyForm/>", async () => {
    render(
      <AcademyForm
        onSubmit={functionMock}
        titleButtonSend={"Botão Enviar"}
        onChangeIdAcademy={functionMock}
        idAcademyValue={"id_academia"}
        onChangeCourse={functionMock}
        courseValue={"Course input"}
        onChangeFoundation={functionMock}
        foundationValue={""}
        onChangeSinceCourse={functionMock}
        sinceCourseValue={""}
        onChangeStatusCourse={functionMock}
        statusCourseValue={"statusCourseValue"}
      />
    );

    const sendButton = await screen.findByText("Botão Enviar");
    sendButton.click();
  });
});
