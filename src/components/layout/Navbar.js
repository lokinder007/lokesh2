import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css"


const Navbar = () => {

  const [show, setShow] = useState(false)

  // const history = useHistory();

  // const logIn = () => {
  //      history.push("/login");
  // }

  // const register = () => {
  //      history.push("/register");
  // }

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="container">

            <Link className="logo " to="/">
              <h2>
                <span>L</span>okesh
                <span>A</span>pp
              </h2>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>

              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`} >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                {
                  localStorage.getItem("user-info") ?
                    <>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/about"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/contact"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Contact
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/services"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Services
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/update"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Update
                        </NavLink>
                      </li>

                    </>
                    :
                    <>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link "
                          aria-current="page"
                          exact to="/"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Home
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/register"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/login"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Log In
                        </NavLink>
                      </li>
                    </>
                }

                <div className="social-links">

                  <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#"><i className="fab fa-twitter"></i></Link>
                  <Link to="#"><i className="fab fa-instagram"></i></Link>
                  <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </ul>
              {/* <form className="d-flex">

                <button
                 className="btn  btn-style btn-style-border "
                  // activeClassName="menu_active" 
                  activeStyle={{ color: 'blue', fontWeight: 'bold' }}
                  onClick={register} 
                  type="submit"
                  >
                  Register
                </button>

                <button className="btn  btn-style btn-style-border " onClick={logIn} type="submit">
                  Log In
                </button>
              </form> */}

            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar