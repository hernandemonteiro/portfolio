import { describe, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import BaseTableForm from "../../../../components/ui/BaseTableForm";
import ContentTableForm from "../../../../components/ui/BaseTableForm/ContentTableForm";

describe("<BaseTableForm/> test", () => {
  it("<BaseTableForm/>", async () => {
    render(
      <BaseTableForm title={"Title table"}>
        <ContentTableForm
          description={"Description content Table!"}
          onClickEdit={() => jest.fn()}
          onClickTrash={() => jest.fn()}
        />
      </BaseTableForm>
    );
    await screen.findByRole("table");
  });
});
