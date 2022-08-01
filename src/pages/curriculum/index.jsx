import React from "react";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import parse from 'html-react-parser';
// import Button from "../../components/Buttons";
import styles from './curriculum.module.css';
import Footer from "../../components/Footer";
import Card from '@mui/material/Card';
import { Avatar, Box, Stack, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
// import Link from "next/Link";

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
      <title>Hernande Monteiro - aqui você sabe um pouco mais sobre mim!</title>
      <Card>
        <Box sx={{ p: 2, display: 'flex' }}>
          <Avatar
            alt="Hernande Monteiro"
            src="https://www.datocms-assets.com/76860/1659202565-download.png"
            sx={{ width: '20%', height: '20%' }} />
          <Stack
            margin={2}
            spacing={1}>
            <Typography fontWeight={700}>{parse(curriculum.name)}</Typography>
            <Typography variant="body2" color="text.secondary">
              Full Stack Developer
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
          {parse(curriculum.resume)}
        </Stack>
      </Card>
      <br />
      <br />
      <Card>
        <Typography
          fontWeight={700}
          margin={2}
        >
          Minha formação e meus cursos:
        </Typography>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 2,
            py: 1,
            bgcolor: 'background.default'
          }}
        >
          {parse(curriculum.academy)}
        </Stack>
      </Card>
      <br />
      <br />
      <Card>
        <Typography
          fontWeight={700}
          margin={2}
        >
          Soft-skills:
        </Typography>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 2,
            py: 1,
            bgcolor: 'background.default'
          }}
        >
          {parse(curriculum.softskills)}
        </Stack>
      </Card>
      <br />
      <br />
      <Card>
        <Typography
          fontWeight={700}
          margin={2}
        >
          Hard-skills:
        </Typography>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 2,
            py: 1,
            bgcolor: 'background.default'
          }}
        >
          {parse(curriculum.hardskills)}
        </Stack>
      </Card>
      <br />
      <br />
      <Card>
        <Typography
          fontWeight={700}
          margin={2}
        >
          Experiências:
        </Typography>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 2,
            py: 1,
            bgcolor: 'background.default'
          }}
        >
          {parse(curriculum.experience)}
        </Stack>
      </Card>
      <br />
      <Footer />

    </div>


  )
}
