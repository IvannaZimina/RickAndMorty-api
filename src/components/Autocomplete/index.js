import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import styleName from './styleName.module.scss';
import * as charActions from '../../store/actionCreators';

import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

function AutocompleteComp() {
    const dispatch = useDispatch();
    const characterList = useSelector(state => state.characters.characters);

    function sleep(delay = 0) {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    }

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);

    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(1e2); // For demo purposes.

            if (active) {
                setOptions([...characterList]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const change = (value) => {
        if (value) {
            dispatch(charActions.filterItem(value))
        } else if (value === null) {
            charActions.getData(dispatch);
        }

    };

    return (
        <Autocomplete className={styleName.autocomplete} open={open}
            onOpen={() => { setOpen(true); }}
            onClose={() => { setOpen(false); }}
            onChange={(event, value) => change(value)}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params} label="Find by name"
                    InputProps={{ ...params.InputProps, endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
};

export default AutocompleteComp;