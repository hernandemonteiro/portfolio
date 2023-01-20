import Router from "next/router";
import { useEffect, useState } from "react";
import { fetchAdminAPI, fetchAPI } from "./helpers/fetchAPI";
import { iSkills } from "../interfaces/iAboutMePage";

export default function useSkills() {
  const [skillsList, setSkillsList] = useState<[iSkills]>();
  const [idSkill, setIdSkill] = useState<boolean | string>(false);
  const [skill, setSkill] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  function handleSkillForm(e) {
    e.preventDefault();
    !idSkill ? createSkill() : updateSkills();
  }
  useEffect(() => {
    fetchAPI(`/api/skills`, "GET").then((res) => setSkillsList(res));
  }, []);

  async function createSkill() {
    await fetchAdminAPI(`/api/skills/create/${type}/${skill}`, "POST")
      .then((res) => {
        if (res.skill === skill) {
          setMessage("cadastrado com sucesso!");
          setSkill("");
          setType("");
        }
      })
      .catch((error) => setMessage("Erro: " + error))
      .finally(finallyFetch);
  }

  async function updateSkills() {
    await fetchAdminAPI(
      `/api/skills/update/${idSkill}/${type}/${skill}`,
      "POST"
    )
      .then((res) => {
        if (res._id === idSkill) {
          setMessage("Modificado com sucesso!");
          setSkill("");
          setType("");
          setIdSkill(false);
        }
      })
      .finally(finallyFetch);
  }
  async function deleteSkill(_id) {
    await fetchAdminAPI(`/api/skills/delete/${_id}`, "DELETE")
      .then((res) => {
        res._id === _id && setMessage("Deletado com sucesso!");
      })
      .finally(finallyFetch);
  }

  function finallyFetch() {
    setTimeout(() => Router.reload(), 2000);
  }

  return {
    skillsList,
    setIdSkill,
    idSkill,
    setSkill,
    skill,
    setType,
    type,
    deleteSkill,
    handleSkillForm,
    message,
  };
}
