import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
//import logo from './logo.svg';
import './index.css';

import Home from '../Home';
import NotFound  from '../NotFound';

const App = () => {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/404" exact component={NotFound}/>
          <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
