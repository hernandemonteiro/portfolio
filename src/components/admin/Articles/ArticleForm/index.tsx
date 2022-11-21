import React, { useState } from "react";
import InputDefault from "../../../ui/Inputs";
import BaseForm from "../../BaseForm";
import ArticlePreview from "../ArticlePreview";

interface ArticleFormProps {
  onClickButtonCloseForm: () => void;
  onChangeTitle: (e) => void;
  title: string;
  onChangeResume: (e) => void;
  resume: string;
  onChangeContent: (e) => void;
  content: any;
  idArticle?: string;
}

export default function ArticleForm(props: ArticleFormProps) {
  const [preview, setPreview] = useState(false);

  return (
    <>
      {preview ? (
        <ArticlePreview
          content={props.content}
          onClick={() => setPreview(false)}
        />
      ) : (
        <BaseForm
          onSubmit={function (e: any): void {
            throw new Error("Function not implemented.");
          }}
          titleHeadForm={"cadastrar artigo"}
          titleButtonSubmit={props.idArticle ? "SALVAR" : "CADASTRAR"}
          titleButtonCloseForm={"FECHAR FORMULÁRIO"}
          onClickButtonCloseForm={props.onClickButtonCloseForm}
        >
          <InputDefault type="text" hidden={true} />
          <InputDefault type="text" required={true} label="TITLE" />
          <InputDefault type="text" required={true} label="RESUME" />
          <label>
            <h2>ARTICLE</h2>
          </label>
          <textarea
            required
            value={props.content}
            style={{
              width: "100%",
              height: "400px",
              resize: "none",
              padding: "2%",
            }}
          ></textarea>
          <InputDefault
            type="button"
            onClick={() => {
              setPreview(true);
            }}
            value="PREVIEW"
          />
        </BaseForm>
      )}
    </>
  );
}
