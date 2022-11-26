import React from "react";
import Academy from "../../../components/admin/Academy";
import TemplateAdmin from "../../../components/admin/TemplateAdmin";
import useAcademy from "../../../hooks/useAcademy";

export default function AcademyPage() {
  const { academyList } = useAcademy();
  return (
    <TemplateAdmin>
      <Academy academy={academyList} />
    </TemplateAdmin>
  );
}
