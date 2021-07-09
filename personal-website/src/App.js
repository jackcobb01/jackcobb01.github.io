// import statements
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MainHeader from './components/MainHeader.js';
import HomePage from './views/HomePage.js';
import AboutPage from './views/AboutPage.js';
import ProjectPage from './views/ProjectPage.js';
import ContactPage from './views/ContactPage.js';

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
        <AboutPage />
        :
        null
      }
      {pageSelection === 2?
        <ProjectPage />
        :
        null
      }
      {pageSelection === 3?
        <ContactPage />
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
