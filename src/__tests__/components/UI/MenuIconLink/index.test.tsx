import React from "react";
import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import MenuIconLink from "../../../../components/ui/MenuIconLink";

describe("<MenuIconLink/>", () => {
  it("<MenuIconLink/>", async () => {
    render(<MenuIconLink to={"/test"}>Child Menu Link</MenuIconLink>);
    await screen.findByText("Child Menu Link");
    
  });
});
