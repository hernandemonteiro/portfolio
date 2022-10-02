import { useState } from "react";
import ButtonOne from "../components/UI/Buttons";
/* @sumary Hook to define a control to paginate the querys
 */
export default function usePagination() {
  // change the quantity posts init in 5 posts;
  const [pagination, setPagination] = useState(5);

  // consult the query length and show the button paginate;
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
