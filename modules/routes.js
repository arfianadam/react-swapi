import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Categories from './Categories'
import Detail from './Detail'
import Home from './Home'
import NotFound from './NotFound'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/categories/:category" component={Categories}/>
    <Route path="/categories/:category/:id" component={Detail}/>
    <Route path="/about" component={About}/>
    <Route path="*" component={NotFound}/>
  </Route>
)
