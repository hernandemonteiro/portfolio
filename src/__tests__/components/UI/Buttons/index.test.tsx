import React from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Button } from "../../../../components/ui/Buttons";

describe("UI Buttons Test", () => {
  it("<Button/>", async () => {
    render(<Button>Button Default</Button>);
    await screen.findByText("Button Default");
  });

  it("<Button/> with onClick", async () => {
    const onClick = jest.fn();
    render(<Button onClick={() => onClick()}>Button OnClick</Button>);
    const button = await screen.findByText("Button OnClick");
    await button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
