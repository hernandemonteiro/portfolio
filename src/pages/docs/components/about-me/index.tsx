import {
  TitleDoc,
  DescriptionDoc,
  ComponentDoc,
  Code,
} from "doc_docs/components";
import CardCurriculum from "../../../../components/about-me/CardCurriculum";
import CardHeaderCurriculum from "../../../../components/about-me/CardHeaderCurriculum";
import TemplateAboutMe from "../../../../components/about-me/TemplateAboutMe";

export default function AboutMeComponentDocs() {
  return (
    <>
      <TitleDoc title="Componentes criados para a página 'about-me'" />
      <DescriptionDoc
        description={
          <p>Componentes utilizados na construção da página {'"/about-me"'}</p>
        }
      />

      <TitleDoc title="<TemplateAboutMe/>" />
      <DescriptionDoc
        description={
          <p>
            Este componente contém toda a base para a página {'"/about-me"'}!
            <br />
            <br />
            Ele configura o <b style={{ color: "red" }}>{"<title/>"}</b> da
            página e importa o componente{" "}
            <b style={{ color: "red" }}>{"<MenuBlog/>"}</b>
            <br />
            <br />
            Sua única prop é a <b>children</b> que adiciona elementos dentro do
            template.
            <br />
            <br />
            *Não é exposto na documentação por motivo de seu componente menu
            conter um style absolute.
          </p>
        }
      />

      <TitleDoc title="<CardCurriculum/>" />
      <ComponentDoc
        element={
          <CardCurriculum title={"Example CardCurriculum"}>
            <p style={{ width: "100%", textAlign: "left" }}>
              Content inside Card
            </p>
          </CardCurriculum>
        }
        options={[
          { prop: "title", default: "required", accept: "string" },
          { prop: "children", default: "required", accept: "JSX.Element" },
        ]}
        description={
          <>
            Card utilizado para expor informações, criado com a intenção de
            construir o component{" "}
            <b style={{ color: "red" }}>{"<AboutMePage/>"}</b>
          </>
        }
      />
      <TitleDoc title="<CardHeaderCurriculum/>" />
      <ComponentDoc
        element={
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              paddingBottom: "11%",
            }}
          >
            <CardHeaderCurriculum
              name={"Nome da pessoa a apresentar"}
              resume={`<div style="padding:2%">
                Resumo sobre a pessoa apresentada
              </div>`}
              title={"Profissão"}
              birthday={"22/11/1998"}
              email={"email@email.com"}
              picture={"https://hernandemonteiro.vercel.app/favicon.png"}
            />
          </div>
        }
        options={[
          { prop: "name", default: "required", accept: "string" },
          { prop: "resume", default: "required", accept: "string" },
          { prop: "title", default: "required", accept: "string" },
          { prop: "birthday", default: "required", accept: "string" },
          { prop: "email", default: "required", accept: "string" },
          { prop: "picture", default: "required", accept: "URL (string)" },
        ]}
        description={
          <>
            Utilizado na construção do componente{" "}
            <b style={{ color: "red" }}>{"<AboutMePage/>"}</b> para apresentar
            uma pessoa.
            <br />
            No caso, o dono do blog e autor Hernande Monteiro.
          </>
        }
      />
      <TitleDoc title="<AboutMePage/>" />
      <DescriptionDoc />
    </>
  );
}
