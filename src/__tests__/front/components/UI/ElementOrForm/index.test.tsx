import React from "react";
import { describe, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ElementOrForm from "../../../../../components/ui/ElementOrForm";

describe("<ElementOrForm/> test", () => {
  it("<ElementOrForm/>", async () => {
    render(
      <ElementOrForm
        element={<h1>aqui vai o elemento</h1>}
        form={<h1>Aqui vai o form ou outro elemento</h1>}
        message={""}
      />
    );
    await screen.findByText("aqui vai o elemento");
  });

  it("<ElementOrForm/> with message", async () => {
    render(
      <ElementOrForm
        element={<h1>aqui vai o elemento</h1>}
        form={<h1>Aqui vai o form ou outro elemento</h1>}
        message={"Message Test"}
      />
    );
    await screen.findByText("Message Test");
  });

  it("<ElementOrForm/> with setView", async () => {
    // to implement click and return true or false
    render(
      <ElementOrForm
        element={<h1>aqui vai o elemento</h1>}
        form={<h1>Aqui vai o form ou outro elemento</h1>}
        message={""}
        changeViewFunctions={() => jest.fn()}
      />
    );
    const buttonRegister = await screen.findByText("CADASTRAR");
    // buttonRegister.click();
  });
});
