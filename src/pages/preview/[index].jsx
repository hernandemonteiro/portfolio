import React from "react";
import { Markup } from "react-render-markup";
import Template from "../../components/Template";

export async function getServerSideProps(context) {
  const id = context.query.index;
  const data = await fetch(process.env.NEXT_PUBLIC_URL_API + "/api/posts");
  const preview = await data.json();
  return { props: { preview } };
}

export default function Artigo({ preview }) {
  const data = preview[0];
  return (
    <Template>
      <Markup markup={data.post} />
    </Template>
  );
}
