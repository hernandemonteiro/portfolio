import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import TemplateBlog from "../../../../../components/blog/TemplateBlog";

describe("<TemplateBlog /> test", () => {
  it("<TemplateBlog />", async () => {
    render(<TemplateBlog>Child Template Doc</TemplateBlog>);
    await screen.findByText("Child Template Doc");
    await screen.findByText("Hernande Monteiro");
  });
});
