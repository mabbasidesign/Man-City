import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import SignIn from '../src/Components/Home/signIn/Index';


const Routes = () =>{
  return (
    <div>
      <Layout>
        <Switch>
            <Route exact component={SignIn} path="/sign_in" />
            <Route exact component={Home} path="/" />
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes;
