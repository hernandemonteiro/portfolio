import React from "react";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import parse from 'html-react-parser';
import Button from "../../components/Buttons";
import styles from './curriculum.module.css';
import Footer from "../../components/Footer";
import Link from "next/Link";

let query = `allCurriculums(first: $limit) {
    softskills,
    hardskills,
    experience,
    resume,
    academy,
    name
  }`;

const PREVIEW_QUERY = `query HomePage($limit: IntType) {
      ${query}
    }`;

export async function getStaticProps() {

  const graphqlRequest = {
    query: PREVIEW_QUERY,
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

export default function Artigo({ subscription }) {

  const { data } = useQuerySubscription(subscription);
  let curriculum = data.allCurriculums[0];
  return (
    <div className={styles.Curriculum}>
      <img className={styles.FotoPerfil} src='https://www.datocms-assets.com/76860/1659202565-download.png' />
      <h1 style={{ textAlign: 'center', marginBottom: '3%' }}>
        {parse(curriculum.name)}<br />
        <span style={{ fontSize: '1rem' }}>Full-stack developer</span>
      </h1>

      <div className={styles.textE}>
        <h4>Um pouco sobre mim:</h4>
        <hr />
        <br />
        {parse(curriculum.resume)}
        <br />
      </div>
      <br />
      <div className={styles.textE}>
        <h4>Minha formação e meus cursos:</h4>
        <hr />
        <br />
        {parse(curriculum.academy)}
        
      </div>
      <br />
      <div className={styles.textE}>
        <h4>Soft-skills:</h4>
        <hr />
        <br />
        {parse(curriculum.softskills)}
      </div>
      <br />
      <div className={styles.textE}>
        <h4>Hard-Skills:</h4>
        <hr />
        <br />
        {parse(curriculum.hardskills)}
      </div>
      <br />
      <div className={styles.textE}>
        <h4>Experiência:</h4>
        <hr />
        <br />
        {parse(curriculum.experience)}
        
      </div>
      <br/>
      {/* <Link href='/'>
      <Button>Blog</Button>
      </Link>
      <Link href='/portfolio'>
      <Button>Portfolio</Button>
      </Link> */}
      <Footer />

    </div>


  )
}
