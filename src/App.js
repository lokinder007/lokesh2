import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/services">  <Protected cmp={Services} /> </Route>
            <Route exact path="/profile">  <Protected cmp={Profile} /> </Route>

            {/* <Route exact path="/errorpage" component={Errorpage} /> */}
            <Route path="*" component={Errorpage} />
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App
