import { useEffect, useState } from "react";
import { fetchAPI } from "./helpers/fetchAPI";
import { iOwnerInfo } from "../components/about-me/AboutMePage/iAboutMePage";

export default function useOwnerInfos() {
  const [ownerInfoList, setOwnerInfoList] = useState<[iOwnerInfo]>();

  useEffect(() => {
    fetchAPI(`/api/ownerInfo`, "GET").then((res) => setOwnerInfoList(res));
  }, []);

  return {
    ownerInfoList,
  };
}
