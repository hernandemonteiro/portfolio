import { useState } from "react";
import ButtonOne from "../components/UI/Buttons";

export default function usePagination() {
  const [pagination, setPagination] = useState(5);
  
  function botaoMostrarMais(query) {
    if (query > 5 && pagination <= query) {
      return (
        <ButtonOne onClick={() => setPagination(pagination + 5)}>
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
