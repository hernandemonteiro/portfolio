import React, { useState } from "react";
import BaseTableForm from "../../../ui/BaseTableForm";
import ContentTableForm from "../../../ui/BaseTableForm/ContentTableForm";
import BaseForm from "../../BaseForm";
import TableOrMessageOrForm from "../../TableOrMessageOrForm";
import ArticleForm from "../ArticleForm";

export default function ArticleTable() {
  const [viewForm, setViewForm] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <TableOrMessageOrForm
      view={viewForm}
      table={
        <BaseTableForm
          title={"Articles"}
          onClickRegisterButton={() => setViewForm(true)}
        >
          <ContentTableForm
            description={"nennda"}
            onClickEdit={() => alert("implements edit method")}
            onClickTrash={() => alert("implements delete method")}
          />
        </BaseTableForm>
      }
      form={
        <ArticleForm
          onClickButtonCloseForm={() => setViewForm(false)}
          onChangeTitle={function (e: any): void {
            throw new Error("Function not implemented.");
          }}
          title={""}
          onChangeResume={function (e: any): void {
            throw new Error("Function not implemented.");
          }}
          resume={""}
          onChangeContent={function (e: any): void {
            throw new Error("Function not implemented.");
          }}
          content={undefined}
        />
      }
      message={message}
    />
  );
}
