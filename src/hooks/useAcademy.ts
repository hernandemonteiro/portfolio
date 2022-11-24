import Router from "next/router";
import { useEffect, useState } from "react";
import { fetchAdminAPI, fetchAPI } from "./helpers/fetchAPI";

export default function useAcademy() {
  const [academyList, setAcademyList] = useState([]);
  const [message, setMessage] = useState("");
  const [idExperience, setIdExperience] = useState<string | boolean>(false);
  const [course, setCourse] = useState("");
  const [foundation, setFoundation] = useState("");
  const [since, setSince] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchAPI("/api/academy", "GET").then((res) => setAcademyList(res));
  }, []);

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
        }
      })
      .finally(finallyAcademy);
  }

  async function deleteAcademy(_id) {
    await fetchAdminAPI(`/api/academy/delete/${_id}`, "DELETE")
      .then((res) => {
        res._id === _id && setMessage("Deletado com sucesso!");
      })
      .finally(finallyAcademy);
  }

  const finallyAcademy = () => setTimeout(() => Router.reload(), 2000);

  return {
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
    academyList,
  };
}
