// import statements
import './App.css';
import React, {useState} from 'react';
import MainHeader from './components/MainHeader.js';
import HomePage from './views/HomePage.js';
import AboutPage from './views/AboutPage.js';
import ProjectPage from './views/ProjectPage.js';
import ContactPage from './views/ContactPage.js';
import MainFooter from './components/MainFooter.js';

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

      {/*Main footer component for the website*/}
      <MainFooter />
    </div>
  );
}

// export statement
export default App;
