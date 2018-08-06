import { authcall } from "../../services/authcall";
import { SET_CURRENT_USER } from "../actionTypes";


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}




export function authUser(type, userData) {
  return dispatch => {
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return authcall("post", `auth`, userData)
        .then(({ token, ...user }) => {
            localStorage.setItem("user", user);
    
          dispatch(setCurrentUser(user));
        
          resolve(); // indicate that the API call succeeded
        })
        
    });
  };
}