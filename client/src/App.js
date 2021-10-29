import { useState } from 'react';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Profile from './components/Profile';
import Header from './components/Header';
import { HOME_PAGE, PROFILE_PAGE, FAV_PAGE, CREATE_POST, LOGIN, REGISTER } from './components/NavItems'
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Register from './components/Register';
// import 'bootstrap';

import './App.css';

// setUser={setUser} user={user}

function App() {

  const [page, setPage] = useState("Home")
  // const [user, setUser] = useState()

  return (


    <div className="App">
      {/* { !user && <Login setUser={setUser} />}

      { (user) &&  */}
      <div>
        <Header setPage={setPage} />
        {page === HOME_PAGE && <Home />}
        {page === PROFILE_PAGE && <Profile />}
        {page === FAV_PAGE && <Favourites />}
        {page === CREATE_POST && <CreatePost />}
        {page === LOGIN && <Login />}
        {page === REGISTER && <Register />}


      </div>
      {/* } */}
    </div>
  );
}

export default App;