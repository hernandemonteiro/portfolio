import { request } from "../lib/datocms";

const ARTIGO_QUERY = `query Artigo($limit: IntType) {
  allPosts(first: $limit) {
    category,
    post
    }
}`;

export default async function getStaticProps() {
  const data = await request({
      query: ARTIGO_QUERY,
      variables: { limit: 10 }
  });
  return {
      props: {data}
  };
}