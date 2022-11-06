import React, { useState } from "react";
import { Button } from "../components/ui/Buttons";

export default function usePagination(quantityViews: number, addViews: number) {
  const [pagination, setPagination] = useState(quantityViews);

  function botaoMostrarMais(query) {
    if (query > 5 && pagination <= query) {
      return (
        <Button onClick={() => setPagination(pagination + addViews)}>
          Mostrar Mais
        </Button>
      );
    }
  }

  return {
    pagination,
    setPagination,
    botaoMostrarMais,
  };
}
