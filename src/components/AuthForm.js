import React, { Component } from "react";
import PropTypes from "prop-types";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/home");
      })
      .catch(() => {
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email,password} = this.state;
    const {
      heading,
      history
    } = this.props;

    

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              
              <label htmlFor="email">E-mail</label>
              <input
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                type="text"
                value={email}
              />
              <label htmlFor="password">Password</label>
              <input
                autoComplete="off"
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                type="password"
                value={password}
              />
              
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
AuthForm.propTypes = {
  buttonText: PropTypes.string,
  heading: PropTypes.string,
  history: PropTypes.object,
  onAuth: PropTypes.func,
  signIn: PropTypes.bool
};

export default AuthForm;