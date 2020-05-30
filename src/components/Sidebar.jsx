import React from "react";
import "../assets/styles/sass/components/_sidebar.scss";
import logo from "../assets/img/logo.png";
import getCookie from "../functions/getCookie";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "../assets/styles/sass/components/_sidebar.scss";

const Sidebar = (props) => {
  const routes = {
    patient: [
      { path: "/patient", name: "Exams List", icon: "icon_name" },
      { path: "#", name: "Exams Results", icon: "icon_name" },
    ],
    medic: [
      { path: "/medic", name: "Home", icon: "icon_name" },
      { path: "#", name: "Patients List", icon: "icon_name" },
    ],
    bacteriologist: [
      { path: "/bacteriologist", name: "Home", icon: "icon_name" },
      { path: "#", name: "Patients List", icon: "icon_name" },
    ],
    doctor: [
      { path: "/medic", name: "Home", icon: "icon_name" },
      { path: "#", name: "Patient List", icon: "icon_name" },
    ],
    admin: [
      { path: "/admin", name: "Home", icon: "icon_name" },
      { path: "#", name: "Users", icon: "icon_name" },
      { path: "#", name: "Create User", icon: "icon_name" },
      { path: "/bulk-data", name: "Bulky Upload", icon: "icon_name" },
    ],
  };
  const role = getCookie("role");
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
                <i>{option.icon}</i>
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
