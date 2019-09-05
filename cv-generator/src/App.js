import React, { useState } from 'react';
import './App.css';
import Cv from './pages/cv/index'
import Configuration from './pages/configuration/index'
import Root from './pages/View'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

function App() {

  const [bgImageSt, setBgImageSt] = useState("bgImage");
   const [avatarImageSt, setAvatarImageSt] = useState("avatarImage");

  

  return (
    <Provider store={store}>
      <Router>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/configuration/',
                  state: {
                    bgImage: bgImageSt,
                    avatarImage: avatarImageSt
                  }
                }}>Configuration</Link>  
                
              </li>
              <li>
                
                <Link to={{
                  pathname: '/cv/',
                  state: {
                    bgImage: bgImageSt,
                    avatarImage: avatarImageSt
                  }
                }}>Cv</Link>  
              </li>
            </ul>
          </nav>
          <Route path="/" exact render={(props) => <Root {...props}  />} />
          <Route path="/configuration/" render={(props) => <Configuration {...props} />} />
          <Route path="/cv/" component={Cv} />
      </Router>
    </Provider>
  );
}

export default App;
