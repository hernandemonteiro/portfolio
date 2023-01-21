import React, { createContext, useContext, useState } from "react";
import { iViewContext, iViewProvider } from "../interfaces/iViewContext";

const initialProps: iViewContext = {
  view: true,
  setView: function (e) {
    console.log("view context: ", e);
  },
};

export const ViewContext = createContext(initialProps);

export function ViewProvider(props: iViewProvider) {
  const [view, setView] = useState(false);

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {props.children}
    </ViewContext.Provider>
  );
}

export const useView = () => useContext(ViewContext);
