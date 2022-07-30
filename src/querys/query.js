
const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
    ${query}
  }`;

  export async function getStaticProps() {
    const graphqlRequest = {
      query: HOMEPAGE_QUERY,
      variables: { limit: 5 },
    };
    return {
      props: {
        subscription: {
          ...graphqlRequest,
          initialData: await request(graphqlRequest),
          token: "59e2d095f8563442f2bb23b25ab172",
        },
      },
    };
  }