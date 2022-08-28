import { request } from "../../lib/datocms";

export default async function preview(req, res) {
  const QUERY = `query Preview($limit: IntType) {
    allPreviews(first: $limit) {
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
    res.status(200).json(subscription.initialData.allPreviews);
  } catch (error) {
    res.status(400).send(error);
  }
}
