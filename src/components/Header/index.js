import style from './style.module.scss';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

function Header() {

  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.contentHeader}>

          <div>
            <NavLink to="/"> <img src={logo} alt="logo" /> </NavLink>
          </div>

          <h1> The Rick and Morty API </h1>


        </div>
      </div>
    </>
  );
}

export default Header;
