import React, { useEffect } from "react";
import useAuthAdmin from "../../../hooks/useAuthAdmin";
import LoaderAdmin from "../../ui/Loading";

interface ProtectedAdminProps {
  children: React.ReactNode;
}
export default function ProtectedAdmin(props: ProtectedAdminProps) {
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
