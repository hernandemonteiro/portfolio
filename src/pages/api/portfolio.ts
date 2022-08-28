import { request } from "../../lib/datocms";

export default async function portfolio(req, res) {
  const QUERY = `query HomePage($limit: IntType) {
    allPortfolios(first: $limit) {
      title,
      shortdescription,
      description,
      category,
      id
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
    res.status(200).json(subscription.initialData.allPortfolios);
  } catch (error) {
    res.send(error);
  }
}
