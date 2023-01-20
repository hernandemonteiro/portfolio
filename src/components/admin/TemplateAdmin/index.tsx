import React from "react";
import { ViewProvider } from "../../../providers/viewContext";
import Template from "../../blog/TemplateBlog";
import MenuAdmin from "../Menu";
import ProtectedAdmin from "../ProtectedAdmin";
import { iTemplateAdmin } from "../../../interfaces/iTemplateAdmin";

export default function TemplateAdmin(props: iTemplateAdmin) {
  return (
    <ProtectedAdmin>
      <Template>
        <ViewProvider>{props.children}</ViewProvider>
        <MenuAdmin />
      </Template>
    </ProtectedAdmin>
  );
}
