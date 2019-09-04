import React from 'react';
import './App.css';
import Cv from './pages/cv/View'
import Configuration from './pages/configuration/View'
import Root from './pages/View'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  const handleOnchangeBg = img => {
    console.log("imageBgAPP: ", img)
  }

  const handleOnchangeAvatar = img => {
    console.log("imageAvatarAPP: ", img)
  }

  return (
    <div className="App">
     <Router>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/configuration/">Configuration</Link>
              
            </li>
            <li>
              <Link to="/cv/">Cv</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact render={(props) => <Root {...props}  />} />
        <Route path="/configuration/" render={(props) => <Configuration {...props} handleOnchangeAvatar={handleOnchangeAvatar} handleOnchangeBg={handleOnchangeBg} />} />
        <Route path="/cv/" component={Cv} />
    </Router>
    </div>
  );
}

export default App;
