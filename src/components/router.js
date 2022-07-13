import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from './src/components/Home';
import LegalMentions from './src/components/LegalMentions';


import NotFound  from './src/components/NotFound';

export default (
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/404" exact component={NotFound}/>
    <Route path="/mentionsLegales" exact component={LegalMentions}/>
  </Switch>
)