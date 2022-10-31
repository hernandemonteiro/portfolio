import React from "react";
import { Markup } from "react-render-markup";
import Template from "../../components/UI/Template";
import { fetchAPI } from "../../helpers/fetchAPI";

export async function getServerSideProps(context) {
  const portfolio = await fetchAPI(
    `/portfolio/getByID/${context.query.index}`,
    "GET"
  );
  return { props: { portfolio } };
}

export default function protfolioDetails({ portfolio }) {
  return (
    <Template>
      <Markup markup={portfolio.content} />
    </Template>
  );
}
