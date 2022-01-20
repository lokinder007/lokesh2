import React from 'react'
import { Link } from 'react-router-dom'
import lokipic from "../../components/images/A.jpg"

const Profile = () => {
    return (
        <>

            <h1 className="mb-4 text-success"><b> Profile Page </b></h1>

            <div className="container emp-profile">
                <form method="" className="form w-75">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="profile-img mb-4">
                                <img
                                    src={lokipic}
                                    width="250"
                                    height="300"
                                    alt="loki" />
                            </div>
                        </div>

                        <div className="col-md-6 mt-5">

                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active h2" id="home" role="tabpanel" aria-labelledby="home-tab">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>123456789</p>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Lokinder Singh</p>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>lokinder007@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>8468092173</p>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web Developer</p>
                                        </div>
                                    </div>

                                    <Link to="#" className="btn mt-3">Edit Profile</Link>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        {/* left side user name */}

                        <div className="col-md-4">
                            <div className="profile-head">
                                <h1>Lokinder Singh</h1>
                                <h3>Web Developer</h3>
                                <p className="profile-rating mt-3 mb-5 h4">RATINGS: <span> 1/10 </span></p>
                            </div>
                        </div>

                        {/* right side work links */}

                        <div className="col-md-8">
                            {/* <div className="float-start"> */}
                                <p className="h2">WORK LINK</p>
                                <a className="h3" href="https://www.google.com/" target="_loki" title="Visit The Site">Google</a> <br />
                                <a className="h3" href="https://lokinder007.github.io/LokeshTodo/" target="_loki" title="Visit The Site">LokeshTodo</a> <br />
                                <a className="h3" href="https://lokinder007.github.io/lokinder007/" target="_loki" title="Visit The Site">ToDo-007</a> <br />
                                <a className="h3" href="https://lokinder007.github.io/loki007/" target="_loki" title="Visit The Site">Loki007</a> <br />
                            {/* </div> */}
                        </div>

                    </div>

                </form>
            </div>


        </>
    )
}

export default Profile
