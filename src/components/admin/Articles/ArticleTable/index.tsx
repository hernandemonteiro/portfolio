import React from "react";
import useArticles from "../../../../hooks/useArticles";
import usePagination from "../../../../hooks/usePagination";
import BaseTableForm from "../../../ui/BaseTableForm";
import ContentTableForm from "../../../ui/BaseTableForm/ContentTableForm";
import ElementOrForm from "../../../ui/ElementOrForm";
import ArticleForm from "../ArticleForm";
import useView from "../../../../providers/view/viewContext";

interface ArticleTableProps {
  articles: any;
}

export default function ArticleTable(props: ArticleTableProps) {
  const { pagination, botaoMostrarMais } = usePagination(5, 5);
  const { view, setView } = useView();
  const {
    message,
    setIdArticle,
    idArticle,
    setTitle,
    title,
    setResume,
    resume,
    setContent,
    content,
    handleArticleSubmitForm,
    deleteArticle,
    unsetForm,
  } = useArticles();

  return (
    <ElementOrForm
      element={
        <>
          <BaseTableForm title={"Articles"}>
            {props.articles.slice(0, pagination).map((element) => {
              return (
                <ContentTableForm
                  key={element._id}
                  description={element.title}
                  onClickEdit={() => {
                    setIdArticle(element._id);
                    setTitle(element.title);
                    setResume(element.resume);
                    setContent(element.content);
                    setView(true);
                  }}
                  onClickTrash={() => deleteArticle(element._id)}
                />
              );
            })}
          </BaseTableForm>
          {botaoMostrarMais(props.articles.length)}
        </>
      }
      form={
        <ArticleForm
          onSubmit={handleArticleSubmitForm}
          onChangeIdArticle={(e) => setIdArticle(e.target.value)}
          idArticle={idArticle}
          onChangeTitle={(e) => setTitle(e.target.value)}
          title={title}
          onChangeResume={(e) => setResume(e.target.value)}
          resume={resume}
          onChangeContent={(e) => setContent(e.target.value)}
          content={content}
        />
      }
      changeViewFunction={() => unsetForm()}
      message={message}
    />
  );
}
