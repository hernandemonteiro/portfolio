import React from "react";
import { describe, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ElementOrForm from "../../../../components/ui/ElementOrForm";
import ViewProvider from "../../../../providers/ViewProvider";

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

  it("<ElementOrForm/> with setView and view false", async () => {
    render(
      <ViewProvider>
        <ElementOrForm
          element={<h1>aqui vai o elemento</h1>}
          form={<h1>Aqui vai o form ou outro elemento</h1>}
          message={""}
          changeViewFunction={() => jest.fn()}
        />
      </ViewProvider>
    );
    const buttonRegister = await screen.findByText("CADASTRAR");
    buttonRegister.click();
  });

  it("<ElementOrForm/> with setView and view true", async () => {
    render(
      <ViewProvider>
        <ElementOrForm
          element={<h1>aqui vai o elemento</h1>}
          form={<h1>Aqui vai o form ou outro elemento</h1>}
          message={""}
          changeViewFunction={() => jest.fn()}
        />
      </ViewProvider>
    );
    const buttonRegister = await screen.findByText("CADASTRAR");
    buttonRegister.click();
    const closeForm = await screen.findByText("FECHAR FORMULÁRIO");
    closeForm.click();
  });
});
