import { request } from "../../lib/datocms";

/* @sumary portfolio api route: /api/portfolio
 * @param [req] contain the request infos from the url request;
 * @param [res] contain the response infos from the status request;
 * @returns a graphql request with date in JSON format from DatoCMS;
 */
export default async function portfolio(req, res) {
  // GraphQl query description to All Portfolio infos;
  const QUERY = `query HomePage($limit: IntType) {
    allPortfolios(first: $limit) {
      title,
      shortdescription,
      description,
      category,
      id
      }
    }`;

  // limit for request for the graphql consult defined by DatoCMS;
  const graphqlRequest: any = {
    query: QUERY,
    variables: { limit: 100 },
  };

  // using the library Dato for fetch the infos;
  let subscription = {
    ...graphqlRequest,
    initialData: await request(graphqlRequest),
    token: process.env.NEXT_PUBLIC_DATO_TOKEN,
  };

  // error handling;
  try {
    res.status(200).json(subscription.initialData.allPortfolios);
  } catch (error) {
    res.send(error);
  }
}
