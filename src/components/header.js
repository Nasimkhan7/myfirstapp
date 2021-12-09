import { Button, Switch } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../productContext";

const Header = (props) => {
  const { loggedin, setLoggedin } = useContext(ProductContext);

  const { productData } = useContext(ProductContext);

  const logout = () => {
    setLoggedin(false);
    sessionStorage.removeItem("user");
  };

  const displayLoggedIn = () => {
    if (loggedin) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/browse" activeClassName="active">
              Browse Products
            </NavLink>
          </li>
          <li className="nav-item">
            <Button onClick={logout} color="secondary" variant="contained">
              Logout
            </Button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup" activeClassName="active">
              Signup
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/event"
                activeClassName="active"
              >
                Event Handling
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/gallery"
                activeClassName="active"
              >
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/addvideo"
                activeClassName="active"
              >
                Add Video
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/listvideos"
                activeClassName="active"
              >
                List Video
              </NavLink>
            </li>
            <li className="nav-item">
              <Switch
                value={props.darkMode}
                onChange={(e, v) => props.setDarkMode(v)}
              />
            </li>
            <li className="nav-item">
              <button className="btn btn-dark">{productData.length}</button>
            </li>
            {displayLoggedIn()}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
