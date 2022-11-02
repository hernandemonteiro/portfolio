import React from "react";
import styles from "./BaseTableForm.module.scss";

interface BaseTableFormProps {
  children: any;
}
export default function BaseTableForm(props: BaseTableFormProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
