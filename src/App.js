import './App.css';
import GlobalStyle from "./assets/styles/global";
import Navigation from "./views/Navigation";
import Blog from "./views/Blog";
import AboutMe from "./views/AboutMe";
import Admin from "./views/Admin";
import React from 'react';
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle>
      <Router>
        <Navigation/>
        <div className="content">
          <Switch>
            <Route exact path="/portfolio/"><Blog/> </Route>
            <Route exact path="/portfolio/about"><AboutMe/> </Route>
            <Route exact path="/portfolio/admin"><Admin/> </Route>
          </Switch>
        </div>
      </Router>
      </GlobalStyle>
    </React.Fragment>
  );
}

export default App;
