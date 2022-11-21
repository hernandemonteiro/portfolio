import {
  HiAcademicCap,
  HiBeaker,
  HiOutlineChartSquareBar,
  HiColorSwatch,
  HiOutlineLogout,
  HiOutlineDocumentText,
  HiUser,
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
        <HiColorSwatch />
      </MenuIconLink>
      <MenuIconLink to="/admin/articles">
        <HiOutlineDocumentText />
      </MenuIconLink>
      <MenuIconLink to="/admin/academy">
        <HiAcademicCap />
      </MenuIconLink>
      <MenuIconLink to="/admin/experience">
        <HiBeaker />
      </MenuIconLink>
      <MenuIcon>
        <HiOutlineLogout onClick={logout} />
      </MenuIcon>
    </Menu>
  );
}
