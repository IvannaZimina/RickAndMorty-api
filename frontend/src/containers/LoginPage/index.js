/* eslint-disable react-hooks/exhaustive-deps */
import style from './style.module.scss';
import googleIcon from './icons/google.png';
import githubIcon from './icons/github.png';

function LoginPage() {

    // the function to open the google authorization page in the self window
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

      // the function to open the github authorization page in the self window
  const github = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };

  return (
    <>
      <div className={style.loginContainer}>
        <div className={style.loginContent}>

          <div className={style.socialBlock}>
            <div className={style.socialBtn} onClick={google}><img src={googleIcon} alt="google" /></div>
            <div className={style.socialBtn} onClick={github}><img src={githubIcon} alt="github" /></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default LoginPage;
