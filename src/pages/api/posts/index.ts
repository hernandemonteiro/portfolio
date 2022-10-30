import { request } from "../../../lib/datocms";

export default async function posts(req, res) {
  // GraphQl query description to All Posts infos;
  const QUERY = `query HomePage($limit: IntType) {
        allPosts(first: $limit,
          orderBy: [title_ASC]) {
          title,
          shortdescription,
          date,
          category,
          id,
          post
          }}`;

  // limit for request for the graphql consult defined by DatoCMS;
  const graphqlRequest: any = {
    query: QUERY,
    variables: { limit: 100 },
  };

  // using the library Dato for fetch the infos;
  const subscription = {
    ...graphqlRequest,
    initialData: await request(graphqlRequest),
    token: process.env.NEXT_PUBLIC_DATO_TOKEN,
  };

  // error handling;
  try {
    res.status(200).json(subscription.initialData.allPosts);
  } catch (error) {
    res.status(400).send(error);
  }
}
