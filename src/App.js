import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer store={props.store} />} />
        <Route path='/profile'
          render={() => <Profile store={props.store} />} />
           <Route path='/users'
          render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
