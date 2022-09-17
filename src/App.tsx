import React, { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Checkin from './components/checkin/Checkin';

const App = () => {
  const [protectedroute, setProtectedroute] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setProtectedroute(true)
    }
  }, [])
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route path='/login'
            component={Login}>
          </Route>
          <Route path='/profile'
            component={Profile}>
          </Route>
          <Route path='/checkin/:id'
            component={Checkin}>
          </Route>
          <Route exact path='/'
            component={Dashboard}>
          </Route>
          <Route path='*'
          >
            <h1>
              Not Found 404
            </h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
