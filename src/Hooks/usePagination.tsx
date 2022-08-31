import { useState } from "react";
import { Button } from "@mui/material";
/* @sumary Hook to define a control to paginate the querys
 */
export default function usePagination() {
  // change the quantity posts init in 5 posts;
  const [pagination, setPagination] = useState(5);

  // consult the query length and show the button paginate;
  function botaoMostrarMais(query) {
    if (query > 5 && pagination <= query) {
      return (
        <Button onClick={() => setPagination(pagination + 5)}>
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
