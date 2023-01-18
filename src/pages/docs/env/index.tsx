import React from "react";
import { DescriptionDoc, TitleDoc } from "doc_docs/components";

export default function EnvDocs() {
  return (
    <>
      <TitleDoc title={"Environment Variables"} />
      <hr />
      <DescriptionDoc
        description={
          <div style={{ textAlign: "center" }}>
            <p>
              *Nosso projeto depende de algumas variáveis de ambiente para
              funcionar corretamente!
            </p>
            <hr />
            Aqui listamos todas elas com a descrição sobre seu uso.
            <hr />
            Elas podem ser acessadas no projeto (NodeJS) via{" "}
            <b>process.env.NOME_DA_VARIAVEL</b>
          </div>
        }
      />
      <hr />
      <TitleDoc title="NEXT_PUBLIC_URL_API" />
      <DescriptionDoc
        description={
          <p>
            Endereço URL ao qual nosso projeto vai chamar sua API principal.
            <br />
            Usamos para alterar a chamada em ambiente local, preview ou
            produção. <br />
            <br />
            Chamada: <b>process.env.NEXT_PUBLIC_URL_API</b>
          </p>
        }
      />
      <TitleDoc title="MONGO_DB" />
      <DescriptionDoc
        description={
          <p>
            URL de conexão ao banco de dados!
            <br />
            *Possuimos duas URLs uma para produção e outra para desenvolvimento.
            <br />
            <br />
            Chamada: <b>process.env.MONGO_DB</b>
          </p>
        }
      />
      <TitleDoc title="NEXT_PUBLIC_CRYPTO_SECRET" />
      <DescriptionDoc
        description={
          <p>
            Senha utilizada por nosso pacote Crypto para criptografar ou
            descriptografar informações!
            <br />
            <br />
            Chamada: <b>process.env.NEXT_PUBLIC_CRYPTO_SECRET</b>
          </p>
        }
      />
      <TitleDoc title="NEXT_PUBLIC_CRYPTO_SECRET" />
      <DescriptionDoc
        description={
          <p>
            Email utilizado para acessar o painel de Administrador!
            <br />
            <br />
            Chamada: <b>process.env.NEXT_PUBLIC_BLOG_EMAIL</b>
          </p>
        }
      />
      <TitleDoc title="NEXT_PUBLIC_PASSWORD_EMAIL" />
      <DescriptionDoc
        description={
          <p>
            Senha utilizada para acessar o painel de Administrador!
            <br />
            <br />
            Chamada: <b>process.env.NEXT_PUBLIC_PASSWORD_EMAIL</b>
          </p>
        }
      />
    </>
  );
}
