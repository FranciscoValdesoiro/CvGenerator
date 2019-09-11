import React, { useState } from 'react';
import './App.css';
import Cv from './pages/cv/index'
import Configuration from './pages/configuration/index'
import Home from './pages/home/View'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
import { Button } from '@material-ui/core';

function App() {
const [configurationActive, setConfigurationActive] = useState(false);

   var styles = {
    configuration: {
      display: configurationActive ? "flex" : "none",
      maxWidth: 'min-content'
    },
  }

const handleOnclick = () => {
  setConfigurationActive(!configurationActive)
}
  

  return (
    <Provider store={store}>
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
            <Button
              variant="contained" 
              color="primary"
              onClick={handleOnclick}
            >
              Config
            </Button>
          <div style={{display: "flex"}}>
            <div style={styles.configuration}>
              <Configuration />
            </div>

            <Route path="/" exact render={(props) => <Home {...props}  />} />
            <Route path="/configuration/" render={(props) => <Configuration {...props} />} />
            <Route path="/cv/" component={Cv} />
          </div>
      </Router>
    </Provider>
  );
}

export default App;
