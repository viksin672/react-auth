import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import withAuth from "../hocs/withAuth";


const Main = props => {
  const { authUser, currentUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/home"
          render={props => <Homepage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/"
          render={props => {
            return (
              <AuthForm
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back."
                {...props}
              />
            );
          }}
        />
        
        
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default withRouter(
  connect(mapStateToProps, { authUser })(Main)
);
