/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import LoginPage from '../containers/LoginPage'
import CharacterPage from '../containers/CharacterPage';
import HomePage from '../containers/HomePage';

function App() {

  const [user, setUser] = useState(null);

    // geeting the user from the backend via proxy in package.json
  useEffect( async () => {
    try {
      const { data } = await axios.get('/auth/login/success');
      setUser(data.user);
    }
    catch (err) {
      console.log('error: ', err) 
    }
  }, []);

  return (
    <div>

      <Header user={user}/>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
        <Route path='/:id' element={user ? <CharacterPage /> : <Navigate to="/login" />} />
      </Routes>

    </div>
  );
}

export default App;
