import { any } from "cypress/types/bluebird";
import React, { createContext, useContext, useState } from "react";

export const ViewContext = createContext<{
  view: boolean;
  setView: (e) => void;
}>({
  view: true,
  setView: function (e) {
    console.log("view context: ", e);
  },
});

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
