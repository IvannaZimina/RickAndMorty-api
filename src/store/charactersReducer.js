/* eslint-disable no-lone-blocks */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import update from 'immutability-helper';
import { CHARACTER_LIST, LOADING, LOAD_FAILED, } from './actiontypes';

const defaultState = {
    loadingStatus: '',
    characters: []
}

export const charactersReducer = (state = defaultState, action) => {
    
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
    }

    return state;
};