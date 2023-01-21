import React from "react";
import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import AboutMePage from "../../../../components/about-me/AboutMePage";

describe("<AboutMePage/> test", () => {
  it("<AboutMePage/>", async () => {
    render(
      <AboutMePage
        ownerInfo={[
          {
            _id: "id_owner_info",
            name: "name of blog owner",
            resume: "resume",
            title: "profession title",
            birthday: "birthday date",
            email: "email",
            picture: "path to picture",
          },
        ]}
        academy={[
          {
            title: "title academy experience",
            foundation: "foundation of course",
            since: "since",
            status: "status",
          },
        ]}
        skills={[
          { _id: "_id_skill", type: "Hard-Skill", skill: "skill description" },
        ]}
        experience={[
          {
            _id: "_idFake",
            title: "title of profession",
            company: "business",
            since: 2020,
            until: 2022,
          },
        ]}
      />
    );

    await screen.findByText("business");
    await screen.findByText("name of blog owner");
    await screen.findByText("Soft-skills:");
  });
});
