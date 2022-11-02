import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import styles from "../BaseTableForm.module.scss";

interface ContentTableFormProps {
  description: string;
  onClickEdit: () => void;
  onClickTrash: () => void;
}

export default function ContentTableForm(props: ContentTableFormProps) {
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
