import React from "react";
import Card from "@mui/material/Card";
import { Avatar, Box, Stack, Divider, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./CardHeaderCurriculum.module.css";

interface CardHeaderCurriculumProps {
  name: string;
  children: any;
}
export default function CardHeaderCurriculum(props: CardHeaderCurriculumProps) {
  return (
    <>
      <Card>
        <Box sx={{ p: 2, display: "flex" }}>
          <Avatar
            alt={"Hernande Monteiro"}
            src="https://www.datocms-assets.com/76860/1659202565-download.png"
            sx={{ width: "20%", height: "20%" }}
          />
          <Stack margin={2} spacing={1}>
            <Typography fontWeight={700}>{props.name}</Typography>
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
              <br />
              <Divider />
              <br />
              <a
                href="https://github.com/hernandemonteiro"
                className={styles.link}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a
                href="https://instagram.com/monteiro.ops"
                className={styles.link}
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
              <a
                href="https://linkedin.com/in/hernande-monteiro"
                target="_blank"
                className={styles.link}
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
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
          {props.children}
        </Stack>
      </Card>
      <br />
      <br />
    </>
  );
}
