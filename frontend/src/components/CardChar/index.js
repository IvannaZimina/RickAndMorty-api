/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Loading from '../Loading';
import AutocompleteComp from '../Autocomplete';
import { setStatusLike } from '../../store/actionCreators';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

function CardChar() {
  
  const dispatch = useDispatch();

    // markable states to change the filter list
  const [checked, setChecked] = useState(false);

    // get the list of all characters from store
  const characterList = useSelector(state => state.characters);

    // load list to render
  let filterList = characterList.characters;
  if (checked) {
    filterList = characterList.characters.filter(status => status.statusLike === true);
  };

    // material UI 
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // change like / dislike function via redux
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

    // switch mark state like/dislike from checkbox
  const toogleLike = () => {
    setChecked(!checked);
  };

    // function to render cards with characters
  const cardContainer = (items) => {
    const card = items.map(item => (
      <>
        <List className={style.charList}>
          <ListItem key={item.id}>
  
            <ListItemAvatar>
              <Avatar> <img className={style.avatar} src={item.image} alt="avatar" /> </Avatar>
            </ListItemAvatar>

            <IconButton onClick={() => likeBtn(item)} >
  
              {item.statusLike === false ? (
                <FavoriteIcon className={style.likeBtn} />
                ) : (
                <FavoriteIcon className={style.favotieCard} />
              )}

            </IconButton>
  
            <NavLink to={`/${item.id}`} >
              <ListItemText primary={item.name} secondary={item.status} />
            </NavLink>
  
          </ListItem>
        </List>
      </>
    ))
    return card;
  };

    // check loading status on the first preview
  const loading = characterList.loadingStatus !== 'ok';

  return (
    <>
      <div className={style.autocomleteBlock}>
        <AutocompleteComp />

        <div className={style.filterLikeCheck}>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} onChange={toogleLike}/>
          <label>Favourite characters</label>
        </div>

      </div>

      {loading ? (
        <div className={style.charBlock}><Loading /></div>
      ) : (
        <div className={style.charBlock}>
          {cardContainer(filterList)}
        </div>
      )}
    </>
  );
};

export default CardChar;