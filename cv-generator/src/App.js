import React from 'react';
import './App.css';
import Cv from './pages/cv/View'
import Configuration from './pages/configuration/View'
import Root from './pages/View'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <Route path="/" exact component={Root} />
        <Route path="/configuration/" component={Configuration} />
        <Route path="/cv/" component={Cv} />
    </Router>
    </div>
  );
}

export default App;
