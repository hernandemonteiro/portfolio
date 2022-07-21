import { useState } from "react";
import useVisible from "./useVisible";

export default function useHome(){
    const {
        visible,
        setVisible
      } = useVisible('');

    const [category, setCategory] = useState('');
    const [article, setArticle] = useState('');

    function FiltrarPosts(categoria) {
        setVisible('Articles');
        setCategory(categoria);
      }
    
      function OpenArticle(seletor) {
        setVisible('Article');
        setArticle(seletor)
      }

      return {
        FiltrarPosts,
        OpenArticle,
        setArticle,
        setCategory,
        article,
        category
      }
}