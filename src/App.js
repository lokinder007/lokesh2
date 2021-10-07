import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Errorpage from './components/pages/Errorpage'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Protected from './components/pages/Protected'
import Register from './components/pages/Register'
import Services from './components/pages/Services'
import Update from './components/pages/Update'

const App = () => {
  return (
    <Router>
      <>
          <Navbar />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/services">  <Protected cmp={Services}/> </Route>
            <Route exact path="/update">  <Protected cmp={Update}/> </Route>
            
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
