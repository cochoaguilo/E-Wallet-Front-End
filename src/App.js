import React from 'react';
import Login from './components/auth/Login';
import NewUser from './components/auth/newUser';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/new-account" component={NewUser}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
