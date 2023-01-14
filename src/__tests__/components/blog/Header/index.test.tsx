import React from "react";
import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Header from "../../../../components/blog/Header";

describe("<Header /> test", () => {
  it("<Header />", async () => {
    render(<Header />);
    await screen.findByText("Hernande Monteiro");
  });
});
