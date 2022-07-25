import Template from "../components/Template";
import { request } from "../lib/datocms";
import NavHome from "../components/NavHome";
import CardArticle from "../components/CardArticle";


const QUERY = `query HomePage($limit: IntType) {
  allPosts(first: $limit) {
    title,
    shortdescription,
    date,
    category,
    post
    }
}`;
export async function getStaticProps() {
  const data = await request({
    query: QUERY,
    variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}

export default function Home({ data }) {

  return (
    <Template nav={<NavHome data={data} />}>

      {data.allPosts.map((element, index) => {
        return(
          <CardArticle
            index={index}
            title={element.title}
            shortdescription={element.shortdescription}
            date={element.date}
            category={element.category}
          />)
      })
      }
      
    </Template>
  )
}
