import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About.jsx';
import Projects from './Projects.jsx';
import pic from './propic.png';

function App() {
  return (
    <div className="App">
    <img className="propic" src={pic} alt="claire kim"/>
      <Router>
        <header className="header">
          <Link to="/" className="nav-item">about</Link>
          <Link to="/projects" className="nav-item">projects</Link>
          <a href="/resume.pdf" onClick="window.location.reload(true);" className="nav-item">resume</a>
        </header>

        <Switch>
          <Route exact path="/">
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
