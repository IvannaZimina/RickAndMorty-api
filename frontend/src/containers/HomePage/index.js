/* eslint-disable react-hooks/exhaustive-deps */
import style from './style.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CardChar from '../../components/CardChar';
import * as charActions from '../../store/actionCreators';

function HomePage() {

  const dispatch = useDispatch();

    // dispatch for the load characters list
  useEffect(() => {
    charActions.getData(dispatch);
  }, []);

  return (
    <>
      <div className={style.listBlock}>
        <CardChar />
      </div>

    </>
  );
}

export default HomePage;
