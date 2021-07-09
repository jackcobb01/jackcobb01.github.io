// import statements
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MainHeader from './components/MainHeader.js';
import HomePage from './views/HomePage.js';

// this function returns the app
function App() {

  // state variables:
  const [pageSelection, setPageSelection] = useState(0);

  function changePageSelection(pageType) {
    setPageSelection(pageType);
  }

  return (
    <div className="App">
      {/*Main header component for the website*/}
      <MainHeader pageSelection={changePageSelection} />

      {/*Page component that is based on which page is selected*/}
      {pageSelection === 0?
        <HomePage />
        :
        null
      }
      {pageSelection === 1?
        <div>About</div>
        :
        null
      }
      {pageSelection === 2?
        <div>Projects</div>
        :
        null
      }
      {pageSelection === 3?
        <div>Contact</div>
        :
        null
      }

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
