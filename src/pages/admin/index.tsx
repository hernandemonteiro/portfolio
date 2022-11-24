import React from "react";
import Dashoard from "../../components/admin/Dashboard";
import TemplateAdmin from "../../components/admin/TemplateAdmin";
import useOwnerInfos from "../../hooks/useOwnerInfos";

export default function InfosPage() {
  const { ownerInfoList } = useOwnerInfos();

  return (
    <TemplateAdmin>
      <Dashoard list={ownerInfoList} />
    </TemplateAdmin>
  );
}
