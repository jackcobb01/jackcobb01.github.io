import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage.js';
import AboutPage from './views/AboutPage.js';
import ProjectPage from './views/ProjectPage.js';
import ContactPage from './views/ContactPage.js';

// this function returns the router component
function Router() {
    return (
        <Switch> {/*This component decides which component to show based on url*/}
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/about' component={AboutPage}></Route>
            <Route exact path='/projects' component={ProjectPage}></Route>
            <Route exact path='/contact' component={ContactPage}></Route>
        </Switch>
    );
}

export default Router;