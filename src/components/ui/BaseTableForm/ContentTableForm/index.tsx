import React from "react";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import styles from "../BaseTableForm.module.scss";
import { iContentTableForm } from "../../../../interfaces/iContentTableForm";

export default function ContentTableForm(props: iContentTableForm) {
  return (
    <tr>
      <td>{props.description}</td>
      <td className={styles.actions}>
        <HiPencilAlt
          onClick={props.onClickEdit}
          className={styles.actionIcon}
        />
        <HiOutlineTrash
          onClick={props.onClickTrash}
          className={styles.actionIcon}
        />
      </td>
    </tr>
  );
}
