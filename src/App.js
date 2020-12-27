import React from 'react';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './login/Login';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar state={props.state.sidebar} />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
           <Route path='/users'
          render={() => <UsersContainer />} />
          <Route path='/login'
          render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
