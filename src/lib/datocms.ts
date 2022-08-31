import { GraphQLClient } from "graphql-request";

// token to acess;
const token = process.env.NEXT_PUBLIC_DATO_TOKEN;

// request function to DatoCMS;
export function request({ query, variables, includeDrafts, excludeInvalid }) {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
}
