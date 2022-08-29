import React from "react";
import { Markup } from "react-render-markup";
import styles from "./curriculum.module.css";
import Card from "@mui/material/Card";
import { Avatar, Box, Stack, Divider, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export async function getServerSideProps() {
  const dataFetch = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/api/curriculum`
  );
  const data = await dataFetch.json();
  return { props: { data } };
}

export default function Artigo({ data }) {
  let curriculum = data[0];
  return (
    <div className={styles.Curriculum}>
      <title>Hernande Monteiro - aqui você sabe um pouco mais sobre mim!</title>
      <Card>
        <Box sx={{ p: 2, display: "flex" }}>
          <Avatar
            alt="Hernande Monteiro"
            src="https://www.datocms-assets.com/76860/1659202565-download.png"
            sx={{ width: "20%", height: "20%" }}
          />
          <Stack margin={2} spacing={1}>
            <Typography fontWeight={700}>
              <Markup markup={curriculum.name} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Full Stack Developer
              <br />
              Born in: 22/11/1998
              <br />
              Email: monteiro1998@live.com
              <br />
              <a href="/" target="_blank">
                <Button>Acess My Blog</Button>
              </a>
              <a href="/portfolio" target="_blank">
                <Button>Acess My Portfolio</Button>
              </a>
              <Divider />
              <a href="https://github.com/hernandemonteiro" target="_blank">
                <FontAwesomeIcon icon={faGithub} size='5x' />
              </a>
              <a href="https://instagram.com/monteiro.ops" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size='5x' />
              </a>
              <a
                href="https://linkedin.com/in/hernande-monteiro"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size='5x' />
              </a>
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <Markup markup={curriculum.resume} />
        </Stack>
      </Card>
      <br />
      <br />
      <Card>
        <Typography fontWeight={700} margin={2}>
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
            bgcolor: "background.default",
          }}
        >
          <Markup markup={curriculum.academy} />
        </Stack>
      </Card>
      <br />
      <br />
      <Card>
        <Typography fontWeight={700} margin={2}>
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
            bgcolor: "background.default",
          }}
        >
          <Markup markup={curriculum.softskills} />
        </Stack>
      </Card>
      <br />
      <br />
      <Card>
        <Typography fontWeight={700} margin={2}>
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
            bgcolor: "background.default",
          }}
        >
          <Markup markup={curriculum.hardskills} />
        </Stack>
      </Card>
      <br />
      <br />
      <Card>
        <Typography fontWeight={700} margin={2}>
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
            bgcolor: "background.default",
          }}
        >
          <Markup markup={curriculum.experience} />
        </Stack>
      </Card>
    </div>
  );
}
