import React from "react";
import Card from "@mui/material/Card";
import { Avatar, Box, Stack, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./CardHeaderCurriculum.module.css";
import { Markup } from "react-render-markup";

interface CardHeaderCurriculumProps {
  name: string;
  resume: string;
  title: string;
  birthday: string;
  email: string;
  picture: string;
}
export default function CardHeaderCurriculum(props: CardHeaderCurriculumProps) {
  return (
    <>
      <Avatar
        alt={props.name}
        src={props.picture}
        className={styles.avatarImg}
        sx={{ width: "30%", height: "30%", margin: "3%" }}
      />
      <Card sx={{ width: "80vw", marginBottom: "3%"}}>
        <Box sx={{ p: 2, display: "flex", textAlign: "center" }}>
          <Stack
            sx={{
              width: "100%",
            }}
          >
            <Typography variant="h4">{props.name}</Typography>
            <Typography variant="h6">{props.title}</Typography>
            <Typography variant="body2">{props.birthday}</Typography>
            <Typography variant="body2">{props.email}</Typography>
          </Stack>
        </Box>
        <Divider />
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Markup markup={props.resume} />
        </Stack>
      </Card>
    </>
  );
}
