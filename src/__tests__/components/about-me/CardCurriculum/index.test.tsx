import React from "react";
import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import CardCurriculum from "../../../../components/about-me/CardCurriculum";

describe("<CardCurriculum/> test", () => {
  it("<CardCurriculum/>", async () => {
    render(
      <CardCurriculum title={"Title Card Curriculum"}>
        Child Card Curriculum
      </CardCurriculum>
    );
    await screen.findByText("Title Card Curriculum");
    await screen.findByText("Child Card Curriculum");
  });
});
