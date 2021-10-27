import { useState } from 'react';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Profile from './components/Profile';
import Header from './components/Header';
import { HOME_PAGE, PROFILE_PAGE, FAV_PAGE } from './components/NavItems'

import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import CreatePost from './components/Create_post';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Join from './components/Join';
import DirectMessage from './components/Direct_messages';

//user first views pg= join component pass login info to query str, then passes data to chat

  const [page, setPage] = useState("Home")
const App = () => {

  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/DirectM"> direct msg  </Link>
        <Link to="/Join"> Join  </Link>
        </nav>
      <div>
        <Header setPage={setPage} />
        {page === HOME_PAGE && <Home />}
        {page === PROFILE_PAGE && <Profile />}
        {page === FAV_PAGE && <Favourites />}
        testing
        <Switch>
          <Route path="/DirectM"> 
        <DirectMessage />
        </Route>
        <Route path="/Join">
        <Join/>
        </Route> 
        </Switch>
      </div>
    </div>

    </Router>
  );
};

/* <Router>
<Router path="/" exact component={Join}/>
<Router path="/direct_messages" exact component={DirectMessage}/>
</Router> */
export default App;

//
