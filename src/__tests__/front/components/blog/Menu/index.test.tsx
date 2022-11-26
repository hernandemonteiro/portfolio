import { describe, it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import MenuBlog from "../../../../../components/blog/MenuBlog";

describe("<MenuBlog /> test", () => {
  it("<MenuBlog />", async () => {
    const { container } = render(<MenuBlog />);
    const buttonSearch = container.getElementsByClassName("searchBarButton");
    expect(buttonSearch.length).toBe(1);
  });
});
