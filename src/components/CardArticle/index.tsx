import Link from "next/link";
import React from "react";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './CardArticle.module.css';

interface CardArticleProps {
    index: number;
    title: string;
    shortdescription: string;
    date: string;
    category: string;


}

export default function CardArticle(props: CardArticleProps) {
    return (
        <Link href={`/artigo/${props.index}`}>
            <Card className={styles.CardArticle}
                sx={{ maxWidth: '100%', minWidth: '95%' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.shortdescription}
                        </Typography><br />
                        <Typography variant="body2" color="text.secondary">
                            {props.date}  {props.category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )

}