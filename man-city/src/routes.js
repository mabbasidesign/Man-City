import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import SignIn from '../src/Components/signIn/Index';
import admin from '../src/Components/admin/dashboard';

import PrivateRoute from '../src/Components/authRoutes/privateRoute';
import PublicRoute from '../src/Components/authRoutes/publicRoute';


const Routes = (props) =>{

  console.log(props);

  return (
    <div>
      <Layout>
        <Switch>
            <PrivateRoute exact {...props} path='/dashboard' component={admin} />
            <PublicRoute exact {...props} restricted={true} component={SignIn} path="/sign_in" />
            <PublicRoute exact {...props} restricted={false} component={Home} path="/" />
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes;
