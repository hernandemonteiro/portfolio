import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Stack, Divider } from "@mui/material";

interface CardCurriculumProps {
  children: React.ReactNode;
  title: string;
}

export default function CardCurriculum(props: CardCurriculumProps) {
  return (
    <Card
      sx={{
        margin: "2%",
        width: "100%",
      }}
    >
      <Typography fontWeight={700} margin={2}>
        {props.title}
      </Typography>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        sx={{
          p: 2,
        }}
      >
        {props.children}
      </Stack>
    </Card>
  );
}
