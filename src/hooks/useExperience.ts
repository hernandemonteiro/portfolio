import Router from "next/router";
import { useState } from "react";
import { fetchAdminAPI } from "../helpers/fetchAPI";

export default function useExperience() {
  const [viewForm, setViewForm] = useState(false);
  const [message, setMessage] = useState("");

  const [idExperience, setIdExperience] = useState<string | boolean>(false);

  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [sinceYear, setSinceYear] = useState(0);
  const [untilYear, setUntilYear] = useState(0);

  function handleExperienceForm(e) {
    e.preventDefault();
    !idExperience ? createExperience() : updateExperience();
  }
  async function createExperience() {
    await fetchAdminAPI(
      `/api/experience/create/${occupation}/${company}/${sinceYear}/${untilYear}`,
      "POST"
    )
      .then((res) => {
        if (res.title === occupation) {
          setMessage("Cadastrado com sucesso!");
          setOccupation("");
          setCompany("");
          setSinceYear(0);
          setUntilYear(0);
          setViewForm(false);
          Router.push("/admin/experience");
        }
      })
      .finally(finallyExperienceFetch);
  }

  async function updateExperience() {
    await fetchAdminAPI(
      `/api/experience/update/${idExperience}/${occupation}/${company}/${sinceYear}/${untilYear}`,
      "POST"
    )
      .then((res) => {
        if (res.title === occupation) {
          setMessage("Modificado com sucesso!");
          setOccupation("");
          setCompany("");
          setSinceYear(0);
          setUntilYear(0);
          setViewForm(false);
          Router.push("/admin/experience");
        }
      })
      .finally(finallyExperienceFetch);
  }

  async function deleteExperience(_id) {
    await fetchAdminAPI(`/api/experience/delete/${_id}`, "DELETE")
      .then((res) => {
        if (res._id === _id) {
          setMessage("Deletado com sucesso!");
          Router.push("/admin/experience");
        }
      })
      .finally(finallyExperienceFetch);
  }

  const finallyExperienceFetch = () => setTimeout(() => setMessage(""), 2000);
  return {
    setViewForm,
    viewForm,
    message,
    handleExperienceForm,
    setIdExperience,
    idExperience,
    setOccupation,
    occupation,
    setCompany,
    company,
    setSinceYear,
    sinceYear,
    setUntilYear,
    untilYear,
    deleteExperience
  };
}
