import React from "react";
import { describe, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import TemplateAdmin from "../../../../components/admin/TemplateAdmin";
import useAuthAdmin from "../../../../hooks/useAuthAdmin";
import sinon from "sinon";
import crypto from "../../../../hooks/helpers/crypto";
jest.mock("../../../../hooks/helpers/crypto");

describe("<TemplateAdmin/> test", () => {
  it("<TemplateAdmin/> unLogged", async () => {
    jest.mocked(crypto);
    sinon.stub(React, "useState").returns([true, jest.fn()]);
    render(
      <TemplateAdmin>
        <>Content inside template</>
      </TemplateAdmin>
    );
    await screen.findByText("Loading...");
    sinon.restore();
  });

  it("<TemplateAdmin/> logged", async () => {
    jest.mocked(crypto);
    sinon.stub(React, "useState").returns([false, jest.fn()]);
    sinon.stub(useAuthAdmin(), "isLoggedAdmin").returns(() => true);
    render(
      <TemplateAdmin>
        <>Content inside template</>
      </TemplateAdmin>
    );

    await screen.findByText("Content inside template");
    sinon.restore();
  });
});
