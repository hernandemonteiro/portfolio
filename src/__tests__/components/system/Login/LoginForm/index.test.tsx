import { describe, it, jest, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import LoginForm from "../../../../../components/system/Login/LoginForm";

describe("<LoginForm /> test", () => {
  const functOnChange = (e) => jest.fn();

  it("<LoginForm/> email input", async () => {
    render(
      <LoginForm
        onSubmit={functOnChange}
        onChangeEmail={functOnChange}
        onChangePassword={functOnChange}
      ></LoginForm>
    );

    await screen.findByText("Entrar");
    const inputEmail = await screen.getByPlaceholderText("Email...");
    inputEmail.focus();
    userEvent.type(inputEmail, "email");
    expect(inputEmail.getAttribute("type")).toBe("email");
  });
  it("<LoginForm/> password input", async () => {
    render(
      <LoginForm
        onSubmit={functOnChange}
        onChangeEmail={functOnChange}
        onChangePassword={functOnChange}
      ></LoginForm>
    );

    const inputPassword = await screen.getByPlaceholderText("Senha...");
    inputPassword.focus();
    userEvent.type(inputPassword, "password");
    expect(inputPassword.getAttribute("type")).toBe("password");
  });
});
