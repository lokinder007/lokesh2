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

                    <form className="form" onSubmit={formSubmit}>
                        <h1 style={{ fontSize: 30 }}>Contact Us</h1>
                        <p style={{ fontSize: 20 }}>Enter Your Details </p>

                        <input
                            type="text"
                            // class="form-control"
                            // id="exampleFormControlInput1"
                            name="fullname"
                            value={data.fullname}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                        />
                        <input
                            type="number"
                            // class="form-control"
                            // id="exampleFormControlInput1"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            placeholder="Your mobile number"
                        />
                        <input
                            type="email"
                            // className="form-control"
                            // id="exampleFormControlInput1"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email"
                        />
                        <textarea
                            // className="form-control"
                            // id="exampleFormControlTextarea1"
                            rows="3"
                            name="msg"
                            value={data.msg}
                            required
                            onChange={handleChange}
                            placeholder="Enter Your Message Here"
                           />
                        
                        {/* <button className="btn btn-outline-primary" type="submit">Submit form</button> */}
                        <button className="button" type="submit">Submit form</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact