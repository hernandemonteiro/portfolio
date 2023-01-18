import React from "react";
import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import LoaderAdmin from "../../../../components/ui/Loading";

describe("<Loading/> test", () => {
  it("<Loading />", async () => {
    render(<LoaderAdmin />);
    await screen.findByText("Loading...");
  });
});
