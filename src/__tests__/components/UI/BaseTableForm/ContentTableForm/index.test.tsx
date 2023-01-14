import React from "react";
import { describe, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ContentTableForm from "../../../../../components/ui/BaseTableForm/ContentTableForm";

describe("<ContentTableForm/> test", () => {
  it("<ContenTableForm/>", async () => {
    render(
      <ContentTableForm
        description={"description content table form"}
        onClickEdit={() => jest.fn()}
        onClickTrash={() => jest.fn()}
      />
    );
    await screen.findByText("description content table form");
  });
});
