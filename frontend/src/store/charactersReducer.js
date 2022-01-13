/* eslint-disable no-duplicate-case */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import update from 'immutability-helper';
import { CHARACTER_LIST, LOADING, LOAD_FAILED, SET_STATUS_LIKE } from './actiontypes';

const defaultState = {
    loadingStatus: '',
    characters: []
}

export const charactersReducer = (state = defaultState, action) => {

    // console.log('charState: ', state.characters);
    // console.log('charAction: ', action);

    switch (action.type) {
        case LOADING:
            {
                return update(state, { loadingStatus: {$set: action.payload} })
            }
        case LOAD_FAILED:
            {
                return update(state, { loadingStatus: {$set: action.payload} })
            }
        case CHARACTER_LIST:
            {
                return update(state, {
                    loadingStatus: {$set: 'ok'},
                    characters: {$set: action.payload}});
            }
        case SET_STATUS_LIKE:
            {
                const idx = state.characters.findIndex(elem => elem.id === action.payload.id);
                return update(state, {characters: {[idx]: {statusLike: {$set: action.payload.statusLike}} }})
            }
    }

    return state;
};