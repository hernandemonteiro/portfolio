import { request } from "../../lib/datocms";

export default async function curriculum(req, res) {
  const QUERY = `query HomePage($limit: IntType) {
    allCurriculums(first: $limit) {
      softskills,
      hardskills,
      experience,
      resume,
      academy,
      name
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
    res.status(200).json(subscription.initialData.allCurriculums);
  } catch (error) {
    res.status(400).send(error);
  }
}
