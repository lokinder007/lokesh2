import React, { useState } from 'react'
import { useHistory } from 'react-router';
import "./form.css"
import imgcont from "../images/contact.jpg"
import img2 from "../images/developer.jpg"

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    })

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what is whant to say : ${data.msg} `
        )

        history.push("/");
    }

    return (
        <>

            <div className="col-10 mx-auto">
                <div className="row ">

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img
                            src={img2}
                            width="400"
                            // height="400"
                            className="img-fluid  animated"
                            alt="home img"
                        />
                        <img
                            src={imgcont}
                            width="400"
                            // height="400"
                            className="img-fluid  animated"
                            alt="home img"
                        />
                    </div>

                    <form className="form w-50" onSubmit={formSubmit}>
                        <h1 style={{ fontSize: 30 }}>Contact Us</h1>
                        <p style={{ fontSize: 20 }}>Enter Your Details </p>

                        <div className="mb-3">
                            <label htmlFor="name" className="px-3 h3">
                                Name*:
                            </label>
                            <input
                                type="text"
                                // class="form-control"
                                // id="exampleFormControlInput1"
                                id="name"
                                name="fullname"
                                value={data.fullname}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"

                            />
                        </div>

                        <div className="mb-3">
                            <label className="px-3 h3">
                                Phone:
                            </label>
                            <input
                                type="number"
                                // class="form-control"
                                // id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone}
                                onChange={handleChange}
                                placeholder="Your mobile number"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="px-3 h3">
                                Email*:
                            </label>
                            <input
                                type="email"
                                // className="form-control"
                                // id="exampleFormControlInput1"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter Your Email"
                            />
                        </div>

                        <div className="mb-3 mx-5" >
                            <label className="px-2 h3">
                                Message*
                            </label>
                            <textarea 
                                className="text-center w-100 "
                                // id="exampleFormControlTextarea1"
                                rows="3"
                                name="msg"
                                value={data.msg}
                                required
                                onChange={handleChange}
                                placeholder="Enter Your Message Here"
                            />
                        </div>

                        {/* <button className="btn btn-outline-primary" type="submit">Submit form</button> */}
                        <button className="button" type="submit">Submit form</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact