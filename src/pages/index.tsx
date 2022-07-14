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
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function Home() {

  const [visible, setVisible] = useState<'Articles' | 'Article'>('Articles');
  const [category, setCategory] = useState<'Articles' | 'Article'>('Articles');
  const [article, setArticle] = useState<'Articles' | 'Article'>('Articles');

  function FiltrarPosts(categoria) {
    setVisible('Articles');
    console.log(categoria);
  }

  return (
    <Template>
      <Title/>
      <hr />
      <div className={styles.Content}>
        <Nav>
          {visible === 'Article' &&
            <ButtonNav onClick={() => setVisible('Articles')}>inicio</ButtonNav>
          }
          <ButtonNav
            onClick={() => FiltrarPosts('front-end')}>
            Front-end
          </ButtonNav>
        </Nav>
        <div className={styles.ArticleBox}>
          {visible === 'Articles' &&
            <Articles>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => setVisible('Article')}>
                  {/* <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
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
