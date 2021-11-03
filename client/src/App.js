import { useState } from 'react';
import FavouriteList from './components/pages/FavouriteList';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Header from './components/Header';
import { HOME_PAGE, PROFILE_PAGE, FAV_PAGE, CREATE_POST, ROUTER_MESSAGES, EXPLORE_PAGE } from './components/NavItems'
import CreatePost from './components/pages/CreatePost';
import Login from './components/Login';
import RouterMessages from './components/pages/RouterMessages'
import useAuth from './hooks/useAuth';
import Explore from './components/pages/Explore'

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  const { user, login, logout, status } = useAuth();

  const [page, setPage] = useState("Home")

  return (
    <Router>
      <div className="App">
        {!user && <Login login={login} status={status} />}
      </div>

      {(user) &&
        <div className="App">
          <Header setPage={setPage} user={user} logout={logout} />
          {page === HOME_PAGE && <Home user={user} />}
          {page === PROFILE_PAGE && <Profile user={user} />}
          {page === FAV_PAGE && <FavouriteList user={user} />}
          {page === CREATE_POST && <CreatePost setPage={setPage} />}
          {page === ROUTER_MESSAGES && <RouterMessages />}
          {page === EXPLORE_PAGE && <Explore user={user} />}
        </div>
      }
    </Router>
  );
};