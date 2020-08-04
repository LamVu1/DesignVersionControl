import React from "react";
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './route_utils';


import LandingPage from '../pages/landing_page';
import MainPage from '../pages/main_page';
import UploadPage from '../pages/upload_page';

const App = () => (
  
  <div className="main-div">
   
      <Switch>
        <ProtectedRoute path='/main' component={MainPage}/>
        <ProtectedRoute path='/upload' component={UploadPage}/> 
        <AuthRoute path='/' component={LandingPage}/> 
        <Redirect to='/' />
     </Switch>

  </div>
  
  );
  
export default App;