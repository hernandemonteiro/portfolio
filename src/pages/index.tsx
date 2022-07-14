import Articles from "../components/Articles";
import Article from "../components/Article";
import Nav from "../components/Nav";
import Template from "../components/Template";
import styles from "../styles/Template.module.css";
import ButtonNav from "../components/UI/buttonNav";
import Title from "../components/UI/TitleName";


export default function Home() {
  return (
    <Template>
        <Title/>
        <hr />
        <div className={styles.Content}>
          <Nav>
            <ButtonNav>front-end</ButtonNav>
          </Nav>
          <div className={styles.ArticleBox}>
            <Articles />
            <Article />
          </div>
        </div>
    </Template>
  )
}
