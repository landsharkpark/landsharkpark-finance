import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import Mortgagecalc from './components/Mortgagecalc'
import About from './components/About'
import Resources from './components/Resources'
//import ReactHelp from './components/ReactHelp'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container" style={{paddingTop: '75px'}}>
          <Switch>
            <Route exact path="/mortgagecalc" component= { Mortgagecalc } />
            <Route exact path="/about" component= { About } />
            <Route exact path="/resources" component= { Resources } />
          </Switch>
        </div>
      </div>
    </Router>    
  );
}

export default App;

/*
        <div className="container" style={{paddingTop: '75px'}}>
          <Switch>
            <Route exact path="/" component= { Sprints } />
            <Route exact path="/reacthelp" component= { ReactHelp } />
            <Route exact path="/about" component= { About } />
            <Route exact path="/resources" component= { Resources } />
          </Switch>
        </div>
*/