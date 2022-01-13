import { CHARACTER_LIST, LOADING, LOAD_FAILED, SET_STATUS_LIKE } from './actiontypes';
import axios from 'axios';

  // preload function
const actionOne = () => {
    const action = { type: LOADING, payload: 'isLoading' };
    return action;
};

  // loading function
const actionTwo = async () => {
    const urlCharacters = 'https://rickandmortyapi.com/api/character/';
    const result = await axios.get(urlCharacters);

    if (result.status !== 200) {
        const action = { type: LOAD_FAILED, payload: 'loadFail' };
        return action;
    }

    const item = [];
    result.data.results.forEach( elem => {
        const card = {
            created: elem.created,
            episode: elem.episode,
            gender: elem.gender,
            id: elem.id,
            image: elem.image,
            location: elem.location,
            name: elem.name,
            origin: elem.origin,
            species: elem.species,
            status: elem.status,
            url: elem.url,
            statusLike: false
        };
        item.push(card);
    })

    const action = { type: CHARACTER_LIST, payload: item };
    return action;
};

  // runners
export const getData = async (dispatch) => {
    dispatch(actionOne());
    dispatch(await actionTwo());
};

  // filter item function
export const filterItem = (payload) => {
  const action = { type: CHARACTER_LIST, payload: [payload] };
  return action;
};

  // functionn to change the status like / dislike
export const setStatusLike = (payload) => {
    const action = { type: SET_STATUS_LIKE, payload: payload };
    return action;
};