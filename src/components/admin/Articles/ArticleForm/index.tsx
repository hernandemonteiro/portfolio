import React, { useState } from "react";
import InputDefault from "../../../ui/Inputs";
import BaseForm from "../../BaseForm";
import ArticlePreview from "../ArticlePreview";
import { iArticleForm } from "../../../../interfaces/iArticleForm";

export default function ArticleForm(props: iArticleForm) {
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
          onSubmit={props.onSubmit}
          titleHeadForm={"cadastrar artigo"}
          titleButtonSubmit={props.idArticle ? "SALVAR" : "CADASTRAR"}
        >
          <InputDefault
            type="text"
            onChange={props.onChangeIdArticle}
            value={props.idArticle}
            hidden={true}
          />
          <InputDefault
            type="text"
            onChange={props.onChangeTitle}
            value={props.title}
            required={true}
            label="TITLE"
          />
          <InputDefault
            type="text"
            onChange={props.onChangeResume}
            value={props.resume}
            required={true}
            label="RESUME"
          />
          <label>
            <h2>ARTICLE</h2>
          </label>
          <textarea
            required
            spellCheck={false}
            onChange={props.onChangeContent}
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
