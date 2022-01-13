import style from './style.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusLike } from '../../store/actionCreators';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CharacterPage() {

    // from Material UI - card component
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

   // for navigate to home page
  let navigate = useNavigate();

    // for getting ID of character obj
  const location = useLocation();
  const charId = parseInt(location.pathname.split('/')[1]); // ID

    // send data to the action creator
  const dispatch = useDispatch();

    // getting the list og characters from store
  const characterList = useSelector(state => state.characters);

    // getting the character obj by ID from url
  const findCharById = (array, char) => {
    return array.find(item => item.id === char);
  };
  const item = findCharById(characterList.characters, charId);

    // function to set the statusLike to the character by ID
  const likeBtn = (item) => {

    if (item.statusLike === false) {
      const mark = {id: item.id, statusLike: true};
      dispatch(setStatusLike(mark));
    }
    else if (item.statusLike === true) {
      const mark = {id: item.id, statusLike: false};
      dispatch(setStatusLike(mark));
    }
  };

  return (
    <div className={style.containerCard}>

      <button type="button" className={style.backBtn} onClick={() => navigate("/")}>Back the list</button>

      <Card key={item.id} className={style.characterCard}>
        <CardHeader title={item.name} subheader={item.status} className={style.titleCard} />
        <Typography variant="body2" color="text.secondary" className={style.suTextCard}> Created: {item.created}  </Typography>

        <CardMedia component="img" className={style.avatarCard} image={item.image} alt={item.name} />

        <Typography variant="body2" color="text.secondary" className={style.suTextCard}> Gender: {item.gender}  </Typography>
        <Typography variant="body2" color="text.secondary" className={style.suTextCard}> Species: {item.species}</Typography>

        <CardActions className={style.actionsOfCard}>

          <IconButton onClick={() => likeBtn(item)}>
            {item.statusLike === false ? (
              <FavoriteIcon className={style.likeBtn} />
              ) : (
                <FavoriteIcon className={style.favotieCard} />
            )}
          </IconButton>

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
