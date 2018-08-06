import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        
        <Link to="/" className="btn btn-primary">
         login
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>hii there</h1>
    </div>
  );
};

function mapStateToProps(state) {
    return {
      currentUser: state.currentUser
    };
  }
  
  export default connect(mapStateToProps, {  })(
    Homepage
  );