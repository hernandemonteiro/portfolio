
export default function Query(){
    const QUERY = `query HomePage($limit: IntType) {
    allPosts(first: $limit,
      orderBy: [title_ASC]) {
      title,
      shortdescription,
      date,
      category,
      id
      }
    }`;
    return QUERY;
}


  