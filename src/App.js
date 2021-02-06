import React, { Suspense } from "react";
import "./App.css";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./login/Login";
import { Component } from "react";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./common/Preloader/Preloader";
import { withSuspense } from "./hoc/WithSuspense";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar state={this.props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={withSuspense(DialogsContainer)}
          />
          <Route
            path="/profile/:userId?"
            render={() => {
              return (
                <Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </Suspense>
              );
            }}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
