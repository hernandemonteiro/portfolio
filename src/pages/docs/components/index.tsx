import { TitleDoc, DescriptionDoc } from "doc_docs/components";

export default function componentWelcomeDocs() {
  return (
    <>
      <DescriptionDoc
        description={
          <div style={{ textAlign: "center" }}>
            <h2>Components</h2>
            <hr />
            <h3>
              Está pasta organiza todos nossos componentes.
              <br />
              <br />
              Por aqui podemos saber o que podemos usar para criar nossas{" "}
              {"UI's"}!
              <br />
              <br />
              Fique a vontade para conhecer!
            </h3>
            <hr />
          </div>
        }
      />
      <DescriptionDoc
        description={
          <div style={{ textAlign: "center" }}>
            <h2>Regras</h2>
            <hr />
            <h3>
              Ainda não possuimos regras para o uso de componentes!
              <br />
              Caso implementarmos alguma regra você pode acompanha-la por aqui!
            </h3>
            <hr />
          </div>
        }
      />
    </>
  );
}
