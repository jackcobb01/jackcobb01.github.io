// import statements
import './App.css';
import React, {useState} from 'react';
import MainHeader from './components/MainHeader.js';
import Router from './Router.js';
import MainFooter from './components/MainFooter.js';

// this function returns the app
function App() {

  // this function returns the app
  return (
    <div className="App">
      {/*Main header component for the website*/}
      <MainHeader />

      {/*Page component that is based on which page is selected*/}
      <Router />

      {/*Main footer component for the website*/}
      <MainFooter />
    </div>
  );
}

// export statement
export default App;
