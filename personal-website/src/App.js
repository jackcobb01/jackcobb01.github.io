// import statements
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Switch, Router, Route } from "react-router-dom";
import MainHeader from './components/MainHeader.js';
import HomePage from './views/HomePage.js';
import AboutPage from './views/AboutPage.js';
import ProjectPage from './views/ProjectPage.js';
import ContactPage from './views/ContactPage.js';

// this function returns the app
function App() {

  // setting up main header button selection:
  var pageSelection = [false, false, false, false];
  if (window.location.pathname === "/") {
    pageSelection[0] = true;
  }
  else if (window.location.pathname === "/About") {
    pageSelection[1] = true;
  }
  else if (window.location.pathname === "/Projects") {
    pageSelection[2] = true;
  }
  else {
    pageSelection[3] = true;
  }

  return (
    <div className="App">
      {/*Main header component for the website*/}
      <MainHeader pageSelection={pageSelection} />
      {/*Page component that is based on which page is selected*/}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/About">
          <AboutPage />
        </Route>
        <Route path="/Projects">
          <ProjectPage />
        </Route>
        <Route path="/Contact">
          <ContactPage />
        </Route>
      </Switch>
      {/*Given starter code from react- WILL REMOVE*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export statement
export default App;
