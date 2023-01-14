import React from "react";
import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import InputDefault from "../../../../components/ui/Inputs";

describe("<InputDefault/> test", () => {
  it("<InputDefault/> with label and required and autoFocus", async () => {
    render(
      <InputDefault required={true} autoFocus={true} label="Test Label" />
    );
    await screen.findByText("Test Label");
  });

  it("<InputDefault/> hidden and type number with placeholder", async () => {
    render(
      <InputDefault type={"number"} hidden={true} placeholder="Test Label" />
    );
    await screen.findByPlaceholderText("Test Label");
  });
});
