import { CHARACTER_LIST, LOADING, LOAD_FAILED } from './actiontypes';
import axios from 'axios';

const actionOne = () => { // загружаем
    const action = { type: LOADING, payload: 'isLoading' };
    return action;
};

const actionTwo = async () => {
    const urlCharacters = 'https://rickandmortyapi.com/api/character/';
    const result = await axios.get(urlCharacters);

    if (result.status !== 200) {
        const action = { type: LOAD_FAILED, payload: 'loadFail' };
        return action;
    }

    const action = { type: CHARACTER_LIST, payload: result.data.results };
    return action;
};

export const getData = async (dispatch) => {
    dispatch(actionOne());
    dispatch(await actionTwo());
};

export const filterItem = (payload) => {
  const action = { type: CHARACTER_LIST, payload: [payload] };
  return action;
};

