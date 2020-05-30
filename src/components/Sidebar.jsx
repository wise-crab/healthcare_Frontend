import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "../assets/styles/sass/components/_sidebar.scss";
import logo from "../assets/img/logo.png";
import routes from "../routes/index";

const Sidebar = (props) => {
  const role = props.user.role;
  const options = routes[role];

  function isCurrentRoute(route) {
    return props.location.pathname === route ? "--active" : "";
  }

  return (
    <section className="sidebar">
      <div className="sidebar__brand">
        <img className="sidebar__brand-img" src={logo} alt="Examedic Logo" />
        <div className="sidebar__brand-title">Examedic</div>
      </div>
      <section className="sidebar__nav">
        <ol className="sidebar__menu">
          {options.map((option, idx) => {
            return (
              <li
                key={idx}
                className={`sidebar__menu-item${isCurrentRoute(option.path)}`}
              >
                <i className={option.icon}></i>
                <Link to={option.path}>{option.name}</Link>
              </li>
            );
          })}
        </ol>
      </section>
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers;
};

export default withRouter(connect(mapStateToProps, null)(Sidebar));
