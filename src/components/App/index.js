import React, { useState } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
//import logo from './logo.svg';
import './index.css';

import LegalMentions from '../LegalMentions';
import LegalMentionsjapan from '../LegalMentionsjapan';
import Load from '../Load';

import Homefrench from '../Homefrench';
import Homejapan from '../Homejapan';
import NotFound  from '../NotFound';

const App = () => {
  const [loading, setLoading] = useState(true);
    
     setTimeout(function () {
      setLoading(false);
    }, 4500);
    if (loading) {
           return <Load />
         }
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
           <Redirect to="/fr" />
        </Route>
        <Route path="/fr" exact component={Homefrench}/>
        <Route path="/jp" exact component={Homejapan}/>
        <Route path="/404" exact component={NotFound}/>
        <Route path="/fr/mentions-legales" exact component={LegalMentions}/>
        <Route path="/jp/mentions-legales" exact component={LegalMentionsjapan}/>
        
          <Redirect to="/404" />
      </Switch>
      
    </div>
  );
}

export default App;
