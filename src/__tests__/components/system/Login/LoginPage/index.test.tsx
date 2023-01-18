import React from "react";
import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import LoginPage from "../../../../../components/system/Login/LoginPage";

describe("<LoginPage /> test", () => {
  it("<LoginPage />", async () => {
    render(<LoginPage>Here is LoginForm</LoginPage>);
    await screen.findByText("Here is LoginForm");
  });
});
