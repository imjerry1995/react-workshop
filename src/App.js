import React, {Component} from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import './index.css';
import Order from './Page/Order'
import Detail from './Page/Detail'

const App = props =>{
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Order}/>
          <Route exact path="/detail" component={Detail}/>
        </Switch>
      </BrowserRouter>
    ) 
}

export default App