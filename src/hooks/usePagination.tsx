import React, { useState } from "react";
import ButtonDefault from "../components/UI/Buttons";
import styles from "../components/UI/Buttons/Buttons.module.scss";

export default function usePagination(quantityViews: number, addViews: number) {
  const [pagination, setPagination] = useState(quantityViews);

  function botaoMostrarMais(query) {
    if (query > 5 && pagination <= query) {
      return (
        <ButtonDefault onClick={() => setPagination(pagination + addViews)}>
          Mostrar Mais
        </ButtonDefault>
      );
    }
  }

  return {
    pagination,
    setPagination,
    botaoMostrarMais,
  };
}
