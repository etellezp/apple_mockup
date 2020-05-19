import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Welcome from './components/welcome/Welcome'
import Iphone from './components/iphone/Iphone'
import Macbook from './components/macbook/Macbook'
import Watch from './components/watch/Watch'
import Register from './components/user/Register'
import Login from './components/user/Login'
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/apple" component={Welcome} />
        <ProtectedRoute exact path='/iphone' component={Iphone} />
        <ProtectedRoute exact path="/macbook" component={Macbook} />
        <ProtectedRoute exact path="/watch" component={Watch} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  )
}

export default App;
