import { useState } from "react";
import { Button } from "@mui/material";

export default function usePagination() {

  const [pagination, setPagination] = useState(5);

  function botaoMostrarMais(query) {
    if (query > 5 && pagination <= query) {
      return (
        <Button onClick={() => setPagination(pagination + 5)}>Mostrar Mais</Button>
      )
    
    }
  }

  return {
    pagination,
    setPagination,
    botaoMostrarMais
  }

}