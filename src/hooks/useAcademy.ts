import Router from "next/router";
import { useState } from "react";
import { fetchAdminAPI } from "../helpers/fetchAPI";

export default function useAcademy() {
  const [viewForm, setViewForm] = useState(false);
  const [message, setMessage] = useState("");

  const [idExperience, setIdExperience] = useState<string | boolean>(false);

  const [course, setCourse] = useState("");
  const [foundation, setFoundation] = useState("");
  const [since, setSince] = useState("");
  const [status, setStatus] = useState("");

  function handleAcademyForm(e) {
    e.preventDefault();
    !idExperience ? createAcademy() : updateAcademy();
  }

  async function createAcademy() {
    await fetchAdminAPI(
      `/api/academy/create/${course}/${foundation}/${since}/${status}`,
      "POST"
    )
      .then((res) => {
        if (res.title === course) {
          setMessage("Cadastrado com sucesso!");
          setIdExperience(false);
          setCourse("");
          setFoundation("");
          setSince("");
          setStatus("");
          setViewForm(false);
          Router.push("/admin/academy");
        }
      })
      .finally(finallyAcademy);
  }

  async function updateAcademy() {
    await fetchAdminAPI(
      `/api/academy/update/${idExperience}/${course}/${foundation}/${since}/${status.toUpperCase()}`,
      "POST"
    )
      .then((res) => {
        if (res.title === course) {
          setMessage("Modificado com sucesso!");
          setIdExperience(false);
          setCourse("");
          setFoundation("");
          setSince("");
          setStatus("");
          setViewForm(false);
          Router.push("/admin/academy");
        }
      })
      .finally(finallyAcademy);
  }

  async function deleteAcademy(_id) {
    await fetchAdminAPI(`/api/academy/delete/${_id}`, "DELETE")
      .then((res) => {
        res._id === _id && setMessage("Deletado com sucesso!");
        Router.push("/admin/academy");
      })
      .finally(finallyAcademy);
  }
  const finallyAcademy = () => setTimeout(() => setMessage(""), 2000);
  return {
    setViewForm,
    viewForm,
    message,
    handleAcademyForm,
    deleteAcademy,
    setIdExperience,
    idExperience,
    setCourse,
    course,
    setFoundation,
    foundation,
    setSince,
    since,
    setStatus,
    status,
  };
}
