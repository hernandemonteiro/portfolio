import { useEffect } from "react";
import useCategory from "../Hooks/useCategory";
export default function Query() {
  
  const QUERY = `query HomePage($limit: IntType) {
  allPosts (
    first: $limit,
    filter: {
      category: {
        eq: "${'category'}"
      }}
  ){
      title,
      shortdescription,
      date,
      category
      }
    }`;
  return QUERY;
}


