import React from "react";
import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import HeaderTableForm from "../../../../../components/ui/BaseTableForm/HeaderTableForm";

describe("<HeaderTableForm/> test", () => {
  it("<HeaderTableForm/>", async () => {
    render(<HeaderTableForm title={"title table form"} />);
    await screen.findByText("title table form");
  });
});
