import React, { useState } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import './index.css';

import LegalMentions from '../LegalMentions';
import Homefrench from '../Homefrench';
import NotFound  from '../NotFound';

const App = () => {

  return (
    <div className="App">
      
      <Switch>
       
        <Route path="/" exact component={Homefrench}/>
        
        <Route path="/404" exact component={NotFound}/>
        <Route path="/mentions-legales" exact component={LegalMentions}/>
      
        
          <Redirect to="/404" />
      </Switch>
      
    </div>
  );
}

export default App;
