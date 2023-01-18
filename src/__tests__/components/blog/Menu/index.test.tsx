import React from "react";
import { describe, it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import MenuBlog from "../../../../components/blog/MenuBlog";

describe("<MenuBlog /> test", () => {
  it("<MenuBlog />", async () => {
    const { container } = render(
      <MenuBlog>
        <>Page is inside</>
      </MenuBlog>
    );
    const buttonSearch = container.getElementsByClassName("openCloseMenuBlog");
    expect(buttonSearch.length).toBe(1);
  });
});
