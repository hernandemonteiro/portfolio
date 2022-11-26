import React from "react";
import { Markup } from "react-render-markup";
import Template from "../../components/blog/TemplateBlog";
import { fetchAPI } from "../../hooks/helpers/fetchAPI";

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
