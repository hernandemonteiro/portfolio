import { request } from "../../../lib/datocms";

export default async function posts(req, res) {
  const QUERY = `query HomePage($limit: IntType) {
        allPosts(first: $limit,
          orderBy: [title_ASC]) {
          title,
          shortdescription,
          date,
          category,
          id,
          post
          }
        }`;
  const graphqlRequest: any = {
    query: QUERY,
    variables: { limit: 100 },
  };

  let subscription = {
    ...graphqlRequest,
    initialData: await request(graphqlRequest),
    token: process.env.NEXT_PUBLIC_DATO_TOKEN,
  };

  try {
    res.status(200).json(subscription.initialData.allPosts);
  } catch (error) {
    res.status(400).send(error);
  }
}
