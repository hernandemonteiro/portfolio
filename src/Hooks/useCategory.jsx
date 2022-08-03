import { useState } from "react";

export default function useCategory(query){

    const [category, setCategory] = useState(query);

    return {
        category,
        setCategory
    }
}