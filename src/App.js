import './App.css';
import Navigation from "./views/Navigation";
import Blog from "./views/Blog";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Blog/>
    </React.Fragment>
  );
}

export default App;
