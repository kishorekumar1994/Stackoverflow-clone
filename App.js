import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Stackoverflow from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Stackoverflow} />   
      </Switch>
    </Router>
    </div >
  );
}

export default App;
