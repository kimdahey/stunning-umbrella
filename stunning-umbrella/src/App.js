import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <Link to="/">claire kim</Link>
          <div className="nav">
            <Link to="/about" className="nav-item">about</Link>
            <Link to="/projects" className="nav-item">projects</Link>
            <Link to="/resume" className="nav-item">resume</Link>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
