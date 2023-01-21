import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Stack, Divider } from "@mui/material";
import { iCardCurriculum } from "../../../interfaces/iCardCurriculum";

export default function CardCurriculum(props: iCardCurriculum) {
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
