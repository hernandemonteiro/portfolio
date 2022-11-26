import Link from "next/link";
import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import styles from "./CardArticle.module.scss";

interface CardArticleProps {
  route: string;
  title: string;
  shortdescription: string;
}
export default function CardArticle(props: CardArticleProps) {
  return (
    <Link href={`${props.route}`}>
      <Card
        className={styles.CardArticle}
        sx={{
          maxWidth: "100%",
          minWidth: "95%",
          padding: "2%",
          cursor: "pointer",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
          component="div"
        >
          {props.title}
        </Typography>
        <Typography variant="body2">{props.shortdescription}</Typography>
      </Card>
    </Link>
  );
}
