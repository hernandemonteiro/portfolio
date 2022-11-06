import React from "react";
import MessageForm from "../../ui/MessageForm";

interface TableOrMessageOrFormProps {
  view: boolean | string;
  table: any;
  form: any;
  message: string;
}

export default function TableOrMessageOrForm(props: TableOrMessageOrFormProps) {
  function tableOrFormView() {
    return !props.view ? props.table : props.form;
  }

  return props.message ? (
    <MessageForm message={props.message} />
  ) : (
    tableOrFormView()
  );
}
