import React from "react";
import { Markup } from "react-render-markup";
import Template from "../../components/Template";

export async function getServerSideProps(context) {
  const id = context.query.index;
  const data = await fetch(`http://localhost:3000/api/posts/${id}`);
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
