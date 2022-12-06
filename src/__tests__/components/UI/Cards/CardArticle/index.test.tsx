import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import CardArticle from "../../../../../components/ui/Cards/CardArticle";

describe("<CardArticle/> Test", () => {
  it("<CardArticle/>", async () => {
    render(
      <CardArticle
        route={"/docs"}
        title={"Teste CardArticle"}
        shortdescription={"Descrição utlizada no componente"}
      />
    );
    await screen.findByText("Teste CardArticle");
  });
});
