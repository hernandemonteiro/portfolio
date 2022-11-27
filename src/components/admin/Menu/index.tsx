import {
  HiAcademicCap,
  HiBeaker,
  HiOutlineChartSquareBar,
  HiColorSwatch,
  HiOutlineLogout,
  HiOutlineDocumentText,
} from "react-icons/hi";
import React from "react";
import useAuthAdmin from "../../../hooks/useAuthAdmin";
import Menu from "../../ui/Menu";
import MenuIconLink from "../../ui/MenuIconLink";
import MenuIcon from "../../ui/MenuIcon";

export default function MenuAdmin() {
  const { logout } = useAuthAdmin();
  return (
    <Menu>
      <MenuIconLink to="/admin">
        <abbr title="Dashboard">
          <HiOutlineChartSquareBar />
        </abbr>
      </MenuIconLink>
      <MenuIconLink to="/admin/skills">
        <abbr title="Skills">
          <HiColorSwatch />
        </abbr>
      </MenuIconLink>
      <MenuIconLink to="/admin/articles">
        <abbr title="Articles">
          <HiOutlineDocumentText />
        </abbr>
      </MenuIconLink>
      <MenuIconLink to="/admin/academy">
        <abbr title="Academy">
          <HiAcademicCap />
        </abbr>
      </MenuIconLink>
      <MenuIconLink to="/admin/experience">
        <abbr title="Expeience">
          <HiBeaker />
        </abbr>
      </MenuIconLink>
      <MenuIcon>
        <abbr title="logout">
          <HiOutlineLogout onClick={logout} />
        </abbr>
      </MenuIcon>
    </Menu>
  );
}
