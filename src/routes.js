import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/menu' component={Menu}/>
    </Switch>
)