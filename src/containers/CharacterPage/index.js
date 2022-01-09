import style from './style.module.scss';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CharacterPage() {

  const location = useLocation();
  const charId = parseInt(location.pathname.split('/')[1]); // ID

  const characterList = useSelector(state => state.characters);

  const findCharById = (array, char) => {
    return array.find(item => item.id === char);
  };
  const item = findCharById(characterList.characters, charId);

  const [expanded, setExpanded] = React.useState(false);
  const [styleLike, setStyleLike] = React.useState(`${style.likeBtn}`);
  const [counter, setCounter] = React.useState(0)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const favoriteBtn = () => {
    setCounter(counter+1);

    if (counter%2 == 0) {
      return setStyleLike(`${style.favotieCard}`)
    } else {
      return setStyleLike(`${style.likeBtn}`)
    }
  }

  return (
    <div className={style.containerCard}>
      <Card className={style.characterCard}>
        <CardHeader title={item.name} subheader={item.status} className={style.titleCard} />
        <Typography variant="body2" color="text.secondary" className={style.suTextCard}> Created: {item.created}  </Typography>

        <CardMedia component="img" className={style.avatarCard} image={item.image} alt={item.name} />

        <Typography variant="body2" color="text.secondary" className={style.suTextCard}> Gender: {item.gender}  </Typography>
        <Typography variant="body2" color="text.secondary" className={style.suTextCard}> Species: {item.species}</Typography>

        <CardActions className={style.actionsOfCard}>

          <IconButton onClick={() => favoriteBtn()}> <FavoriteIcon className={styleLike}/> </IconButton>

          <div className={style.episodesCard}>
            <Typography paragraph>Episode:</Typography>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </div>

        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {item.episode.map(elem => (
                <Typography paragraph><a href={elem}>{elem.split('https://rickandmortyapi.com/api/')}</a></Typography>
            ))}
          </CardContent>
        </Collapse>

      </Card>
    </div>
  );
}

export default CharacterPage;
