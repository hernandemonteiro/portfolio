import Articles from "../components/Articles";
import Article from "../components/Article";
import Nav from "../components/Nav";
import Template from "../components/Template";
import styles from "../styles/Template.module.css";
import ButtonNav from "../components/UI/buttonNav";
import Title from "../components/UI/TitleName";
import { useState } from "react";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';



export default function Home() {

  const [visible, setVisible] = useState<'Articles' | 'Article'>('Articles');
  const [category, setCategory] = useState('');
  const [article, setArticle] = useState<'Articles' | 'Article'>('Articles');

  function FiltrarPosts(categoria) {
    setVisible('Articles');
    setCategory(categoria);
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
          <ButtonNav
            onClick={() => FiltrarPosts('front-end')}>
            Front-end
          </ButtonNav>
        </Nav>
        <div className={styles.ArticleBox}>

          {visible === 'Articles' &&
            <Articles>
              {category !== '' &&
                <>
                  <h1>{category}</h1>
                  <hr />
                </>}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => setVisible('Article')}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      O que é javascript?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      16/07/2022 front-end
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card><br />
            </Articles>
          }
          {visible === 'Article' &&
            <Article />
          }
        </div>
      </div>
    </Template>
  )
}
