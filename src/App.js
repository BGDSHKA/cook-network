import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/profile'
          render={() => <ProfileContainer />} />
           <Route path='/users'
          render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
