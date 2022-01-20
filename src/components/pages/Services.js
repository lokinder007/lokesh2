import React from 'react'
import { Link } from 'react-router-dom'
import imgTodo from "../images/todo_list.jpg"
import imgContact from "../images/contacts.jpg"
import imgWeather from "../images/weather.jpg"

const Services = () => {
    return (
        <>

                {/* <h1 className="text-center text-success text-capitalize my-5"> our services</h1> */}
                <h1 className="mb-4 text-success"><b> Our Services </b></h1>

                <div className="container my-5">
                    <div className="row">

                        <div className="col">
                            <div className="card" >
                                <img style={{height:300}} src={imgTodo} className="card-img-top" alt="Todo..." />
                                <div className="card-body">
                                    <h3 className="card-title ">Todo List</h3>
                                    <p className="card-text h4"> LokeshApp offers a powerful tool for managing task lists and meeting deadlines. Try for free! </p>
                                    <Link to="/todo" className="btn btn-success">Check Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card " >
                                {/* <img src="https://picsum.photos/201" className="card-img-top" alt="..." /> */}
                                <img style={{height:300}} src={imgContact} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">Contact App</h3>
                                    <p className="card-text h4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/contactApp" className="btn btn-primary">Check Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card" >
                                <img style={{height:300}} src={imgWeather} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">Weather App</h3>
                                    <p className="card-text h4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/weather" className="btn">Check Now</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

        </>
    )
}

export default Services
