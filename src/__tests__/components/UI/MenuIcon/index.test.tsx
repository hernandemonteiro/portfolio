import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import MenuIcon from "../../../../components/ui/MenuIcon";

describe("<MenuIcon/> test", () => {
  it("<MenuIcon/>", async () => {
    render(<MenuIcon>Icon Here</MenuIcon>);
    await screen.findByText("Icon Here");
  });
});
