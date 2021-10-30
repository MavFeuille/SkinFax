import { useState } from 'react';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Profile from './components/Profile';
import Header from './components/Header';
import { HOME_PAGE, PROFILE_PAGE, FAV_PAGE, CREATE_POST } from './components/NavItems'
import CreatePost from './components/CreatePost';
import Login from './components/Login';
// import 'bootstrap';

import useAuth from './hooks/useAuth';

import './App.css';

function App() {

  const { user, login, logout, status } = useAuth();

  const [page, setPage] = useState("Home")

  return (
    <div className="App">
      {!user && <Login login={login} status={status} />}

      {(user) &&
        <div>
          <Header setPage={setPage} user={user} logout={logout} />
          {page === HOME_PAGE && <Home user={user} />}
          {page === PROFILE_PAGE && <Profile />}
          {page === FAV_PAGE && <Favourites />}
          {page === CREATE_POST && <CreatePost />}
        </div>
      }
    </div>
  );
}

export default App;