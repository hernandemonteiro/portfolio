import React from "react";
import HeaderTableForm from "../HeaderTableForm";
import styles from "./BaseTableForm.module.scss";

interface BaseTableFormProps {
  children: any;
  title: string;
}
export default function BaseTableForm(props: BaseTableFormProps) {
  return (
    <>
      <HeaderTableForm
        title={props.title}
      />
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
