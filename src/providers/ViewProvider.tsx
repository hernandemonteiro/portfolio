import React, { useState } from "react";
import ViewContext from "./viewContext";

export default function ViewProvider({ children }) {
  const [view, setView] = useState(false);
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}
