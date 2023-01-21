import React from "react";
import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";
import LoaderAdmin from "../../../../components/ui/Loading";

describe("<Loading/> test", () => {
  it("<Loading />", async () => {
    const { container } = render(<LoaderAdmin />);
    await container.getElementsByClassName("loadingAnimation");
  });
});
