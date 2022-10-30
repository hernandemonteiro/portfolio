import React, { useState } from "react";
import ButtonOne from "../components/UI/Buttons";

export default function usePagination(quantityViews: number, addViews: number) {
  const [pagination, setPagination] = useState(quantityViews);

  function botaoMostrarMais(query) {
    if (query > 5 && pagination <= query) {
      return (
        <ButtonOne onClick={() => setPagination(pagination + addViews)}>
          Mostrar Mais
        </ButtonOne>
      );
    }
  }

  return {
    pagination,
    setPagination,
    botaoMostrarMais,
  };
}
