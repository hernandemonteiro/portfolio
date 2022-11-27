import { useContext } from "react";
import ViewContext from "./viewContext";

export default function useView() {
  return useContext(ViewContext);
}
