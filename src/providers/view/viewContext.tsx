import React, { createContext, useContext, useState } from "react";

export const ViewContext = createContext<object>({});

interface iViewProvider {
  children: React.ReactNode;
}

export function ViewProvider(props: iViewProvider) {
  const [view, setView] = useState(false);
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {props.children}
    </ViewContext.Provider>
  );
}

export default function useView() {
  return useContext(ViewContext);
}
