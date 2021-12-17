import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Create from './components/Create'
import Edit from './components/Edit'
import Home from './components/Home'
import List from './components/List'

export default class App extends Component {

  render(){
    return(
      <Router>
        <div className = "container">
          <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <Link to = {'/'} className="navbar-brand">CRUD</Link>
            <div className='collapse navbar-collapse' _id = 'navbarSupportedContent'>
              <ul className = "navbar-nav mr-auto">
              <li>
              <Link to = {'/'} className = 'nav-link'>Home</Link>
              </li>
              <li>
              <Link to = {'/create'} className = 'nav-link'>Create</Link>
              </li>
              <li>
              <Link to = {'/list'} className = 'nav-link'>List</Link>
              </li>
              </ul>
            </div>
          </nav>
          <h2>Projeto CRUD</h2> <br/>
          <Routes>
            <Route exact path = '/' element = {<Home/>} />
            <Route path = '/create' element = {<Create/>} />
            <Route path = '/edit/:_id' element = {<Edit/>} />
            <Route path = '/list' element = {<List/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}