import Router from "next/router";
import { useEffect, useState } from "react";
import { fetchAPI } from "./helpers/fetchAPI";
import { iExperience } from "../components/about-me/AboutMePage/iAboutMePage";

export default function useExperience() {
  const [experienceList, setExperienceList] = useState<[iExperience]>();
  const [message, setMessage] = useState("");
  const [idExperience, setIdExperience] = useState<string | boolean>(false);
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [sinceYear, setSinceYear] = useState(0);
  const [untilYear, setUntilYear] = useState(0);

  useEffect(() => getExperience(), []);

  function getExperience() {
    fetchAPI("/api/experience", "GET").then((res) => setExperienceList(res));
  }

  function handleExperienceForm(e) {
    e.preventDefault();
    !idExperience ? createExperience() : updateExperience();
  }

  async function createExperience() {
    await fetchAPI(`/api/experience/create`, "POST", {
      title: occupation,
      company: company,
      since: sinceYear,
      until: untilYear,
    }).then((res) => {
      if (res._id) {
        setMessage("Cadastrado com sucesso!");
        setOccupation("");
        setCompany("");
        setSinceYear(0);
        setUntilYear(0);
        afterFetch();
      }
      if (res.errors) {
        console.log(res.errors);
      }
    });
  }

  async function updateExperience() {
    await fetchAPI(`/api/experience/update`, "POST", {
      _id: idExperience,
      title: occupation,
      company: company,
      since: sinceYear,
      until: untilYear,
    }).then((res) => {
      if (res._id) {
        setMessage("Modificado com sucesso!");
        setOccupation("");
        setCompany("");
        setSinceYear(0);
        setUntilYear(0);
        afterFetch();
      }
    });
  }

  async function deleteExperience(_id) {
    await fetchAPI(`/api/experience/delete`, "DELETE", {
      _id: _id,
    }).then((res) => {
      if (res._id === _id) {
        setMessage("Deletado com sucesso!");
        afterFetch();
      }
    });
  }

  const afterFetch = () => setTimeout(() => Router.reload(), 2000);
  return {
    experienceList,
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
    deleteExperience,
  };
}
