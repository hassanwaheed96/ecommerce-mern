import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";

export const Header = () => {
  const [auth, setAuth] = useAuth();
  const logoutHandler = () => {
    setAuth({ ...auth, user: null });
    localStorage.removeItem("auth");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" href="#">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              {auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="nav-link"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      onClick={logoutHandler}
                      to="/login"
                      className="nav-link"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Sign up
                    </NavLink>
                  </li>
                </>
              )}

              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};
