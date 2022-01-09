import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import CharacterPage from '../containers/CharacterPage';
import HomePage from '../containers/HomePage';

function App() {

  return (
    <div>

      <Header />

      <Routes>
        <Route exact path='/'element={<HomePage />} />
        <Route path=':id' element={<CharacterPage />} />
      </Routes>

    </div>
  );
}

export default App;
