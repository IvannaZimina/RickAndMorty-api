import style from './style.module.scss';
import { Link } from 'react-router-dom';

import logo from './logo.png';

function Header({ user }) {

   // the function of logout
  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  }

  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.contentHeader}>

          <div className={style.logoBlock}>
            <div className={style.logoHome}> <Link to="/"> <img src={logo} alt="Home" /> </Link> </div>
            <h1> The Rick and Morty API </h1>
          </div>

          {user ? (
            <div className={style.userDataBlock}>
              <div className={style.avatar}><img src={user.photos[0].value} alt="logo" /></div>
              <div className={style.userName}>{user.displayName}</div>
              <div className={style.logoutBtn} onClick={logout}>Logout</div>
            </div>
          ) : (
            <Link className={style.link} to="/login">Login</Link>
          )}

        </div>
      </div>
    </>
  );
}

export default Header;
