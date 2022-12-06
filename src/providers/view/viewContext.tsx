import React, { createContext, useContext, useState } from "react";

export const ViewContext = createContext<any>({});

export function ViewProvider({ children }) {
  const [view, setView] = useState(false);
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

export default function useView() {
  return useContext(ViewContext);
}
