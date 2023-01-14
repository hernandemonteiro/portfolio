import React from "react";
import { describe, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Academy from "../../../../components/admin/Academy";

describe("<Academy/>", () => {
  it("<Academy />", async () => {
    const functionMock = (e) => {
      jest.fn();
    };
    render(
      <Academy
        academy={[{}]}
        pagination={5}
        buttonPagination={undefined}
        TableContent={(element) => <h1>Elemento para imprimir</h1>}
        message={""}
        onSubmitForm={functionMock}
        setIdExperience={functionMock}
        idExperience={""}
        setCourse={functionMock}
        course={""}
        setFoundation={functionMock}
        foundation={""}
        setSince={functionMock}
        since={""}
        setStatus={functionMock}
        status={""}
      />
    );
    // confirm if exists the button 'CADASTRAR' of <ElementOrForm />
    await screen.findByText("CADASTRAR");
  });
});
