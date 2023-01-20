import React from "react";
import AboutMePage from "../../components/about-me/AboutMePage";
import TemplateAboutMe from "../../components/about-me/TemplateAboutMe";
import Menu from "../../components/blog/MenuBlog";
import useOwnerInfos from "../../hooks/useOwnerInfos";
import useAcademy from "../../hooks/useAcademy";
import useSkills from "../../hooks/useSkills";
import useExperience from "../../hooks/useExperience";
import Head from "next/head";
import LoaderAdmin from "../../components/ui/Loading";

export default function Artigo() {
  const { ownerInfoList } = useOwnerInfos();
  const { academyList } = useAcademy();
  const { skillsList } = useSkills();
  const { experienceList } = useExperience();

  const loading = ownerInfoList && academyList && skillsList && experienceList;

  return (
    <>
      {!loading && <LoaderAdmin />}
      {loading && (
        <Menu>
          <TemplateAboutMe>
            <Head>
              <title>
                Hernande Monteiro - aqui você sabe um pouco mais sobre mim!
              </title>
              <meta
                name="description"
                content="Página de informações sobre o desenvolvedor Full-Stack, Hernande Monteiro. suas habilidades técnicas, experiências e skills."
              />
            </Head>

            <AboutMePage
              ownerInfo={ownerInfoList}
              academy={academyList}
              skills={skillsList}
              experience={experienceList}
            />
          </TemplateAboutMe>
        </Menu>
      )}
    </>
  );
}
