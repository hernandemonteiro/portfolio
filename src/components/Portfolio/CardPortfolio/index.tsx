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
      sx={{ maxWidth: '100%', minWidth: "95%" }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: '2%'
      }}
    ><br/>
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
        <Link href={`/portfolio/details/${props.id}`}>
          <Button size="small">Detalhes</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
