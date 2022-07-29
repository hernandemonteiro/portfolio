import Template from "../components/Template";
import { request } from "../lib/datocms";
import Nav from "../components/Nav";
import CardArticle from "../components/CardArticle";


const QUERY = `query Home($limit: IntType) {
  allPosts(first: $limit) {
    title,
    shortdescription,
    date,
    category
    }
}`;
export async function getStaticProps() {
    const data = await request({
        query: QUERY,
        variables: { limit: 5 }
    });
    return {
        props: { data }
    };
}

export default function Home({ data }) {
  
  return (
    <Template nav={<Nav data={data} />} >

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
