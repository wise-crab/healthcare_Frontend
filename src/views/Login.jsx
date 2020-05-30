import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from "../assets/img/Brand-icon-horizontal.png";
import { loginUser } from "../actions/authActions";
import "../assets/styles/sass/views/__login.scss";

const Login = (props) => {
  const [form, setValues] = useState({
    username: "",
    role: "",
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser({ ...form, history: props.history });
  };

  return (
    <div className="login-card">
      <h1>Sign In</h1>
      <section className="login card">
        <section className="login__container">
          <div className="login__container-logo">
            <img src={logo} alt="logo" />
          </div>
          <form className="login__container-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Nombre de usuario</label>
            <input
              id="username"
              name="username"
              className="input"
              type="text"
              placeholder="Username"
              onChange={updateInput}
              required
            />
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              className="input"
              type="password"
              onChange={updateInput}
              placeholder="Password"
              required
            />
            <div className="login__container-remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Remember me
              </label>
              <a href="/" id="forgot">
                Forgot password
              </a>
            </div>
            <button className="button" type="submit">
              Login
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);
