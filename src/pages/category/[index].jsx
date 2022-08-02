import Template from "../../components/Template";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import Nav from "../../components/Nav";
import CardArticle from "../../components/CardArticle";
import usePagination from "../../Hooks/usePagination";
import React from 'react';
import { useRouter, useContext } from "next/router";




export default function Category({ subscription }) {

  const { data } = useQuerySubscription(subscription);
  const {
    pagination,
    botaoMostrarMais
  } = usePagination();
  let category = useRouter().query.index;

 React.createContext(category)
  return (
    <Template nav={<Nav data={data} />}>
      <>
        <h2>{category}</h2>
      </>
      {data.allPosts.slice(0, pagination).map((element) => {

        return (
          <CardArticle
            index={element.id}
            title={element.title}
            shortdescription={element.shortdescription}
            date={element.date}
            category={element.category}
          />)

      })
      }
      {botaoMostrarMais(data.allPosts.length)}

    </Template>
  )

}

// const QUERY = `query HomePage($limit: IntType) {
//   allPosts (
//     first: $limit,
//     filter: {
//       category: {
//         eq: "${'Front-end'}"
//       }}
//   ){
//       title,
//       shortdescription,
//       date,
//       category
//       }
//     }`;

const QUERY = `query HomePage($limit: IntType) {
  allPosts (
    first: $limit){
      title,
      shortdescription,
      date,
      category,
      id
      }
    }`;
export async function getStaticProps() {

  const graphqlRequest = {
    query: QUERY,
    variables: { limit: 100 },
  };

  return {
    props: {
      subscription: {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: "59e2d095f8563442f2bb23b25ab172",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { index: 'Front-end' } },
    ],
    fallback: 'blocking'
  }
}
