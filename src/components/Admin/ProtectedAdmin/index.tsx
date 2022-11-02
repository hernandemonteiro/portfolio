import React, { useEffect } from "react";
import useAuthAdmin from "../../../hooks/useAuthAdmin";

interface ProtectedAdminProps {
  children: any;
}
export default function ProtectedAdmin(props: ProtectedAdminProps) {
  const { isLoggedAdmin, loading } = useAuthAdmin();
  isLoggedAdmin();
  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Loading...</h1>
      </div>
    );
  } else {
    return props.children;
  }
}
