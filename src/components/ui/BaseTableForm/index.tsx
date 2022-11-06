import React from "react";
import HeaderTableForm from "../HeaderTableForm";
import styles from "./BaseTableForm.module.scss";

interface BaseTableFormProps {
  children: any;
  title: string;
  onClickRegisterButton: () => void;
}
export default function BaseTableForm(props: BaseTableFormProps) {
  return (
    <>
      <HeaderTableForm
        title={props.title}
        onClickRegisterButton={props.onClickRegisterButton}
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
