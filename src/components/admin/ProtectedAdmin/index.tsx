import React, { useEffect } from "react";
import useAuthAdmin from "../../../hooks/useAuthAdmin";
import LoaderAdmin from "../../ui/Loading";
import { iProtectedAdmin } from "../../../interfaces/iProtectedAdmin";

export default function ProtectedAdmin(props: iProtectedAdmin) {
  const { isLoggedAdmin, loading } = useAuthAdmin();
  useEffect(() => {
    isLoggedAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      {loading && <LoaderAdmin />}
      {!loading && props.children}
    </>
  );
}
