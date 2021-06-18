import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <div className="background">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            {/* <Route path="/equipo" component={Equipo} /> */}
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
