import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/about' component={About}/>
    </Switch>
)