import React from 'react'
// import Navbar from '../layout/Navbar'
import { NavLink } from 'react-router-dom'
import img from "../images/C.png"

const About = () => {
   
    return (
        <>
          {/* <Navbar/> */}
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className='row' >
                        <div className="col-10 mx-auto">
                            <div className="row ">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Grow Your Business With
                                        <strong className="brand-name"> Loki007</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of talented developer
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/contact" className="btn ">
                                            Contact Us
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img
                                        src={img}
                                        width="400"
                                        // height="400"
                                        className="img-fluid  animated"
                                        alt="home img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
