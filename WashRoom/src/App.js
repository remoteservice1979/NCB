import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './app.css'
import './tabs.css'
import 'bootstrap/dist/css/bootstrap.css';


import SimpleTabs from './components/panel/MainPanel/Main-tabs';
import UserInfo from './components/panel/InformationPanel/userInfo-tabs';


export default () => {
  return (
    <Router>
    <div>
      <h2>Welcome to R F S</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/userInfo'} className="nav-link">Add User </Link></li>
        <li><Link to={'/about'} className="nav-link">About</Link></li>
      </ul>
      </nav>
      <hr />
      <Switch>
          <Route exact path='/' component={SimpleTabs} />
          <Route exact path='/userInfo' component={UserInfo} />
         
       </Switch>
    </div>
  </Router>
  )
}

