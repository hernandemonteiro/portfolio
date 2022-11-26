import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import CardHeaderCurriculum from "../../../../../components/about-me/CardHeaderCurriculum";

describe("<CardHeaderCurriculum /> test", () => {
  it("<CardHeaderCurriculum />", async () => {
    render(
      <CardHeaderCurriculum
        name={"name of owner blog"}
        resume={"bio resume"}
        title={"profession title"}
        birthday={"22/11/1998"}
        email={"email address"}
        picture={"path to an picture"}
      />
    );
    await screen.findByText("name of owner blog");
    await screen.findByText("profession title");
    await screen.findByText("22/11/1998");
  });
});
