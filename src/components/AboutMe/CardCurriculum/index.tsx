import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Stack, Divider } from "@mui/material";

interface CardCurriculumProps {
  children: any;
  title: string;
}

export default function CardCurriculum(props: CardCurriculumProps) {
  return (
    <Card
      sx={{
        marginBottom: "6%",
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
        width="80vw"
        sx={{
          px: 2,
          py: 1,
          bgcolor: "background.default",
        }}
      >
        {props.children}
      </Stack>
    </Card>
  );
}
