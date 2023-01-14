import React from "react";
import { ViewProvider } from "../../../providers/view/viewContext";
import Template from "../../blog/TemplateBlog";
import MenuAdmin from "../Menu";
import ProtectedAdmin from "../ProtectedAdmin";

interface TemplateAdminProps {
  children?: any;
}
export default function TemplateAdmin(props: TemplateAdminProps) {
  return (
    <ProtectedAdmin>
      <Template>
        <ViewProvider>{props.children}</ViewProvider>
        <MenuAdmin />
      </Template>
    </ProtectedAdmin>
  );
}
