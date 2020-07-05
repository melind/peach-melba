import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
//import logo from './logo.svg';
import './index.css';

import Home from '../Home';
import Test from '../Test';
import Footer from '../Footer';
import NotFound  from '../NotFound';

const App = () => {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/404" exact component={NotFound}/>
        <Route path="/test" exact component={Test}/>
          <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
