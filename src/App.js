import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ContactApp from './components/ContactApp/ContactApp'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Errorpage from './components/pages/Errorpage'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Protected from './components/pages/Protected'
import Register from './components/pages/Register'
import Services from './components/pages/Services'
import Todo from './components/Todo/Todo'
import Weather from './components/Weather/Weather'


const App = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    /*
     setInterval used in order to refresh the page constantly
 in order to have the "logout" button show immediately in place of
 "login", as soon as user logs out.
 */
    setInterval(() => {
      const a = localStorage.getItem("user-login")
      setUser(a)
    }, [])

  }, []);


  return (
    <Router>
      <>
        <Navbar user={user} />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/todo" element={<Todo/>} />
            <Route exact path="/contactApp" element={<ContactApp/>} />
            <Route exact path="/weather" element={<Weather/>} />

            <Route exact path="/services" element={<Protected cmp={Services} />} />
            <Route exact path="/profile" element={<Protected cmp={Profile} />} />
            {/* <Route exact path="/services">  <Protected cmp={Services} /> </Route> */}
            {/* <Route exact path="/profile">  <Protected cmp={Profile} /> </Route> */}

            {/* <Route exact path="/errorpage" component={Errorpage} /> */}
            {/* <Redirect to="/errorpage" /> */}
            <Route path="*" element={<Errorpage/>} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App
