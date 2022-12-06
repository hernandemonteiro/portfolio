import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Menu from "../../../../components/ui/Menu";
import MenuIcon from "../../../../components/ui/MenuIcon";

describe("<Menu/> test", () => {
  it("<Menu/>", async () => {
    render(
      <Menu>
        <MenuIcon>Icon Here...</MenuIcon>
      </Menu>
    );
    await screen.findByText("Icon Here...");
  });
});
