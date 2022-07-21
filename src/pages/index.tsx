import Articles from "../components/Articles";
import Article from "../components/Article";
import Nav from "../components/NavTemplate";
import Template from "../components/Template";
import styles from "../styles/Template.module.css";
import ButtonNav from "../components/UI/buttonNav";
import Title from "../components/UI/TitleName";
import { useState } from "react";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { request } from "../lib/datocms";
import parse from 'html-react-parser';
import Link from "next/link";


const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allPosts(first: $limit) {
    title,
    shortdescription,
    date,
    category,
    post
    }
}`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}

export default function Home({ data }) {

  const [visible, setVisible] = useState<'Articles' | 'Article'>('Articles');
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

  return (
    <Template>
      <Title />
      <hr />
      <div className={styles.Content}>
        <Nav>
          {visible === 'Article' &&
            <ButtonNav onClick={() => setVisible('Articles')}>Voltar</ButtonNav>
          }
          {category !== '' &&
            <ButtonNav onClick={() => FiltrarPosts('')}>Todos</ButtonNav>
          }
          {data.allPosts.map(element => {

            return <ButtonNav
              onClick={() => FiltrarPosts(element.category)}>
              {element.category}
            </ButtonNav>
          })}
          <Link href='/portfolio'>
            <ButtonNav>Portfolio</ButtonNav>
          </Link>
          <Link href='/curriculum'>
            <ButtonNav>Sobre eu</ButtonNav>
          </Link>
        </Nav>
        <div className={styles.ArticleBox}>

          {visible === 'Articles' &&
            <Articles>
              {category !== '' &&
                <>
                  <h1>{category}</h1>
                  <hr />
                </>}
              {
                data.allPosts.map((element, index) => {
                  return <>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea onClick={() => OpenArticle(index)}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {element.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {element.date} {element.category}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card><br />
                  </>
                })
              }

            </Articles>
          }

          {visible === 'Article' &&
            <Article>
              {data.allPosts.map((element, index) => {
                if (index == article) {
                  return parse(element.post)
                }
              })}
            </Article>
          }
        </div>
      </div>
    </Template>
  )
}
