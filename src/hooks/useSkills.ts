import Router from "next/router";
import { useState } from "react";
import { fetchAdminAPI } from "../helpers/fetchAPI";

export default function useSkills() {
  const [viewForm, setForm] = useState(false);
  const [idSkill, setIdSkill] = useState<boolean | string>(false);
  const [skill, setSkill] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  function handleSkillForm(e) {
    e.preventDefault();
    !idSkill ? createSkill() : updateSkills();
  }

  async function createSkill() {
    await fetchAdminAPI(`/api/skills/create/${type}/${skill}`, "POST")
      .then((res) => {
        if (res.skill === skill) {
          Router.push("/admin/skills");
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
          Router.push("/admin/skills");
        }
      })
      .finally(finallyFetch);
  }
  async function deleteSkill(_id) {
    await fetchAdminAPI(`/api/skills/delete/${_id}`, "DELETE")
      .then((res) => {
        if (res._id === _id) {
          setMessage("Deletado com sucesso!");
          Router.push("/admin/skills");
        }
      })
      .finally(finallyFetch);
  }

  function finallyFetch() {
    setTimeout(() => setMessage(""), 2000);
    setForm(false);
  }

  return {
    setIdSkill,
    idSkill,
    setSkill,
    skill,
    setType,
    type,
    deleteSkill,
    handleSkillForm,
    message,
    viewForm,
    setForm,
  };
}
