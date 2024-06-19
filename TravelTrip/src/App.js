import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import MyTrips from './components/MyTrips'
import BookANewTrip from './components/BookANewTrip'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/my-trips" component={MyTrips} />
        <Route path="/book-a-new-trip" component={BookANewTrip} />
        <Route path="/" component={Home} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
