import { GraphQLClient } from "graphql-request";

const token = '59e2d095f8563442f2bb23b25ab172';


export function request({ query, variables, includeDrafts, excludeInvalid }) {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers });
  return client.request(query, variables);
}


