import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Welcome from './components/welcome/Welcome'
import Iphone from './components/iphone/Iphone'
import Macbook from './components/macbook/Macbook'
import Watch from './components/watch/Watch'
import Register from './components/user/Register'
import Login from './components/user/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/apple" component={Welcome} />
        <Route exact path='/iphone' component={Iphone} />
        <Route exact path="/macbook" component={Macbook} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  )
}

export default App;
