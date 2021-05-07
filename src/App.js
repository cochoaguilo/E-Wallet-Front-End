import React from 'react';
import Login from './components/auth/Login';
import NewUser from './components/auth/newUser';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AlertaState from './components/alertas/alertaState';
import AuthState from './components/auth/context/authState'
function App() {
  return (
    <AlertaState>
    <AuthState>
    <Router>
      <Switch>
        <Route exact path="/E-Wallet-Front-End" component={Login}/>
        <Route exact path="/E-Wallet-Front-End/new-account" component={NewUser}/>
        <Route exact path="/E-Wallet-Front-End/home" component={Home}/>
      </Switch>
    </Router>
    </AuthState>
    </AlertaState>
  );
}

export default App;
