import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import List from './pages/list'
import Edit from'./pages/edit'
import Create from './pages/create'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {List}/>                 
                <Route path="/edit" component = {Edit}/>
                <Route path="/create" component = {Create}/>
            </Switch>
        </BrowserRouter>
    )
}