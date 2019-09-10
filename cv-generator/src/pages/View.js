import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

const Root = () => {
  return (
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
  );
}

export default Root;