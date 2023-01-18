/* eslint-disable react/prop-types */
import React from "react";
import Template from "../../components/blog/TemplateBlog";
import CardArticle from "../../components/ui/Cards/CardArticle";
import usePagination from "../../hooks/usePagination";
import { fetchAPI } from "../../hooks/helpers/fetchAPI";
import Menu from "../../components/blog/MenuBlog";

export async function getServerSideProps(context) {
  const { param } = context.params;
  const posts = await fetchAPI(`/api/articles/search/${param}`, "GET");
  return { props: { posts } };
}

export default function Home({ posts }) {
  const { pagination, botaoMostrarMais } = usePagination(5, 5);

  return (
    <Menu>
      <Template>
        {posts.length > 0 ? (
          posts.slice(0, pagination).map((element) => {
            return (
              <CardArticle
                key={element._id}
                route={"/article/" + element._id}
                title={element.title}
                shortdescription={element.resume}
              />
            );
          })
        ) : (
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1>
              Oopss... <br />
              Ainda não temos nada sobre isso!
            </h1>
          </div>
        )}
        {botaoMostrarMais(posts.length)}
      </Template>
    </Menu>
  );
}
