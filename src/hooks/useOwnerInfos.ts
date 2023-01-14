import { useEffect, useState } from "react";
import { fetchAPI } from "./helpers/fetchAPI";

export default function useOwnerInfos() {
  const [ownerInfoList, setOwnerInfoList] = useState([]);
  useEffect(() => {
    fetchAPI(`/api/ownerInfo`, "GET").then((res) => setOwnerInfoList(res));
  }, []);

  return {
    ownerInfoList,
  };
}
