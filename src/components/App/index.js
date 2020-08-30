import React, { useState } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
//import logo from './logo.svg';
import './index.css';

import Home from '../Home';
import LegalMentions from '../LegalMentions';
import Load from '../Load';

import NotFound  from '../NotFound';

const App = () => {
  const [loading, setLoading] = useState(true);
    
     setTimeout(function () {
      setLoading(false);
    }, 6000);
    if (loading) {
           return <Load />
         }
  return (
    <div className="App">
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/404" exact component={NotFound}/>
        <Route path="/mentionsLegales" exact component={LegalMentions}/>
          <Redirect to="/404" />
      </Switch>
      
    </div>
  );
}

export default App;
