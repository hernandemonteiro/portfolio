import React from "react";
import HeaderTableForm from "./HeaderTableForm";
import styles from "./BaseTableForm.module.scss";
import { iBaseTableForm } from "../../../interfaces/iBaseTableForm";

export default function BaseTableForm(props: iBaseTableForm) {
  return (
    <>
      <HeaderTableForm title={props.title} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </>
  );
}
