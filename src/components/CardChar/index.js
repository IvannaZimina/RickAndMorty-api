import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';

import Loading from '../Loading';
import AutocompleteComp from '../../components/Autocomplete';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function CardChar() {

  const characterList = useSelector(state => state.characters);

  const card = characterList.characters.map(item => (
    <>
      <List className={style.charList}>
        <ListItem>

          <ListItemAvatar>
            <Avatar> <img className={style.avatar} src={item.image} alt="avatar" /> </Avatar>
          </ListItemAvatar>

          <NavLink to={`${item.id}`} >
            <ListItemText primary={item.name} secondary={item.status} />
          </NavLink>

        </ListItem>
      </List>
    </>
  ))

  const loading = characterList.loadingStatus !== 'ok';

  return (
    <>
      <div className={style.autocomleteBlock}>
        <AutocompleteComp />
      </div>


      {loading ? (

        <div className={style.charBlock}>
          <Loading />
        </div>

      ) : (

        <div className={style.charBlock}>
          <div>{card}</div>
        </div>

      )}
    </>
  );
};

export default CardChar;