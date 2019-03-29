import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import LinkDest from './LinkDest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to='/page1'>Page1</Link>

          <Route path='/page1' exact render={props=> <LinkDest {...props} test="Hello World" />}/>

        </Router>
      </div>
    );
  }
}

export default App;
