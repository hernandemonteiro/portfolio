import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import TemplateAboutMe from "../../../../components/about-me/TemplateAboutMe";

describe("<TemplateAboutMe/> test", () => {
  it("<TemplateAboutMe/>", async () => {
    render(
      <TemplateAboutMe>
        <>Here is the child</>
      </TemplateAboutMe>
    );
    await screen.findByText("Here is the child");
  });
});
