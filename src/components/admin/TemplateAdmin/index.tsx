import { props } from "cypress/types/bluebird";
import Template from "../../blog/Template";
import MenuAdmin from "../Menu";
import ProtectedAdmin from "../ProtectedAdmin";

interface TemplateAdminProps {
  children?: any;
}
export default function TemplateAdmin(props: TemplateAdminProps) {
  return (
    <ProtectedAdmin>
      <Template>
        {props.children}
        <MenuAdmin />
      </Template>
    </ProtectedAdmin>
  );
}
