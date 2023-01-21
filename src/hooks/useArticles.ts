import Router from "next/router";
import { useEffect, useState } from "react";
import { fetchAdminAPI, fetchAPI, tokenAPI } from "../patterns/api/fetchAPI";

export default function useArticles() {
  const [articlesList, setArticlesList] = useState<[any]>([{}]);
  const [message, setMessage] = useState("");
  const [idArticle, setIdArticle] = useState<boolean | string>(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [content, setContent] = useState("");

  function handleArticleSubmitForm(e) {
    e.preventDefault();
    idArticle ? updateArticle() : registerArticle();
  }

  useEffect(() => {
    fetchArticle();
  }, []);

  function fetchArticle() {
    fetchAPI(`/api/articles`, "GET").then((res) => setArticlesList(res));
  }
  
  function unsetForm() {
    setTitle("");
    setResume("");
    setContent("");
    setIdArticle(false);
  }

  async function registerArticle() {
    await fetchWithContentBody(
      `/api/articles/create/${title}/${resume}`,
      "POST"
    )
      .then((res) => {
        if (res.title === title) {
          setMessage("Cadastrado com sucesso!");
          unsetForm();
        } else {
          setMessage("Erro ao cadastrar!");
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage(`Erro no cadastro, olhe seu console`);
      });
    unsetMessageTime();
  }

  async function updateArticle() {
    await fetchWithContentBody(
      `/api/articles/update/${idArticle}/${title}/${resume}`,
      "POST"
    )
      .then((res) => {
        if (res._id === idArticle) {
          unsetForm();
          setMessage("Modificado com sucesso!");
        } else {
          setMessage("Erro ao modificar!");
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage(`Erro ao modificar, olhe seu console`);
      });
    unsetMessageTime();
  }

  async function fetchWithContentBody(route, method) {
    return await fetch(process.env.NEXT_PUBLIC_URL_API + route, {
      method: method,
      headers: {
        "x-admin-access": await tokenAPI(),
      },
      body: await content,
    }).then((res) => res.json());
  }

  async function deleteArticle(id) {
    await fetchAdminAPI(`/api/articles/delete/${id}`, "DELETE")
      .then((res) => {
        res._id === id
          ? setMessage("Deletado com sucesso!")
          : setMessage("Erro ao deletar!");
      })
      .catch((error) => {
        console.log(error);
        setMessage(`Erro ao deletar, olhe seu console!`);
      });
    unsetMessageTime();
  }

  function unsetMessageTime() {
    setTimeout(() => Router.reload(), 2000);
  }

  return {
    setMessage,
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
    articlesList,
  };
}
