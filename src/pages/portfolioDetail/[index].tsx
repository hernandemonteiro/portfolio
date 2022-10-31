import React from "react";
import { Markup } from "react-render-markup";
import Template from "../../components/UI/Template";

export async function getServerSideProps(context) {
  const portfolio = await fetch(
    `http://localhost:3000/api/portfolio/getByID/${context.query.index}`
  ).then((res) => res.json());
  return { props: { portfolio } };
}

export default function protfolioDetails({ portfolio }) {
  return (
    <Template>
      <Markup markup={portfolio.content} />
    </Template>
  );
}
