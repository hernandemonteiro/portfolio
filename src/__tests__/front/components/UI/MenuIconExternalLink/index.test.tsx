import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import MenuIconExternalLink from "../../../../../components/ui/MenuIconExternalLink";

describe("<MenuIconLink/>", () => {
  it("<MenuIconLink/>", async () => {
    render(
      <MenuIconExternalLink to={"/test"}>
        Child Menu External Link
      </MenuIconExternalLink>
    );
    await screen.findByText("Child Menu External Link");
  });
});
