import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Dropdown from "../Dropdown";

import "./SideBar.css";
// import SideTop from "../SideTop";
// import SideBottom from "../SideBottom";

export default function SideBar({ data }) {
  const logo =
    "https://res.cloudinary.com/dtzv3fsas/image/upload/v1683932465/SpotifyClone/Spotify_Logo_RGB_White_etpfol.png";

  return (
    <div className="sideBar">
      <ul className="sideTop">
        <li className="logo">
          <img src={logo}></img>
        </li>
        <li>
          <NavLink exact to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </NavLink>
          <NavLink exact to="/search">
            Search
          </NavLink>
        </li>
      </ul>
      <ul className="sideBottom">
        <li className="library">
          {" "}
          <FontAwesomeIcon icon={faBook} />
          Your Library
        </li>
        <FontAwesomeIcon icon={faPlus} />
      </ul>
      <Dropdown data={data} />
      <div>Privacy</div>
      <div>Privacy</div>
      <div>Privacy</div>
      <div>Privacy</div>
    </div>
  );
}