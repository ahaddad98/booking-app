import React, { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Checkin from './components/checkin/Dashboard';

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route path='/login'
            component={Login}>
          </Route>
          <Route  path='/profile'
            component={Profile}>
          </Route>
          <Route  path='/checkin'
            component={Checkin}>
          </Route>
          <Route exact path='/'
            component={Dashboard}>
          </Route>
          <Route  path='*'
            >
              <h1>
                Not Found 404
              </h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    // </MyProvider>
    // <DefaultLayout />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
