import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Button, Avatar, IconButton, Typography } from '@mui/material';
import ExpandMoreButton from '../UI/ExpandMoreButton';
import defaulHeroImage from '../../images/hero_default.png';
import DotsMenu from '../Shared/DotsMenu';

export default function HeroCard({ hero, handleDeleteHero, handleEditHero }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <Card sx={{ width: 300, height: '100%', margin: '5px', backgroundColor: '#F1F1F1' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: '#92DEEB' }} aria-label="recipe">
            {hero.nick_name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DotsMenu 
              options={[
                { option: 'Delete', function: () => handleDeleteHero(hero._id) },
                { option: 'Edit', function: () => handleEditHero(hero._id) },
              ]} 
            />
          </IconButton>
        }
        title={hero.nick_name}
        subheader={hero.real_name}
      />
      <CardMedia
        component="img"
        sx={{ height: 160,  objectFit: 'cover' }}
        image={hero.images[0] || defaulHeroImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', textOverflow: 'ellipsis', height: '2.5rem' }}>
          {hero.origin_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/${hero._id}`}>
          <Button variant='outlined' size="small" sx={{ padding: '5px 10px', color:'#92DEEB', borderColor: '#92DEEB' }}>
            Learn More
          </Button>
        </Link>
        <ExpandMoreButton expand={expanded} onClick={handleExpandClick} />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ borderBottom:'dashed #92DEEB' }}>
          <Typography>
            {hero.catch_phrase}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}