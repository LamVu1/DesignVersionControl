import React from "react";
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './route_utils';


import LandingPage from '../pages/landing_page';
import MainPage from '../pages/main_page';

const App = () => (
  
  <div className="main-div">
   
      <Switch>
        <Route path='/main' component={MainPage}/>
        <Route path='/' component={LandingPage}/> 
        <Redirect to='/' />
     </Switch>

  </div>
  
  );
  
export default App;