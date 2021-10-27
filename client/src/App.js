import { useState } from 'react';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Profile from './components/Profile';
import Header from './components/Header';
import { HOME_PAGE, PROFILE_PAGE, FAV_PAGE } from './components/NavItems'

import './App.css';

function App() {

  const [page, setPage] = useState("Home")

  return (
    <div className="App">
      <div>
        <Header setPage={setPage} />
        {page === HOME_PAGE && <Home />}
        {page === PROFILE_PAGE && <Profile />}
        {page === FAV_PAGE && <Favourites />}
      </div>
    </div>
  );
}

export default App;