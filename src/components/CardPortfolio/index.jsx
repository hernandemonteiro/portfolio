import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function MediaCard(props) {
  return (
    <Card
      sx={{ maxWidth: '345' }}
      style={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: '2%'
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={props.image}
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {props.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.ShortDescription}
          <br />
          <br />
          Category: {props.Category}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/portfolioDetails/${props.id}`}>
          <Button size="small">Detalhes</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
