import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import SignIn from '../src/Components/signIn/Index';
import admin from '../src/Components/admin/dashboard';

import PrivateRoute from '../src/Components/authRoutes/privateRoute';
import PublicRoute from '../src/Components/authRoutes/publicRoute';
import AdminMatches from '../src/Components/admin/matches/index';
import AddEditMatch from '../src/Components/admin/matches/AddEditMatch';
import AdminPlayers from '../src/Components/admin/players/index';
import AddEditPlayers from '../src/Components/admin/players/AddEditPlayers'


const Routes = (props) =>{
  return (
    <div>
      <Layout>
        <Switch>
            <PrivateRoute exact {...props} path='/admin_players/add_players' component={AddEditPlayers} />
            <PrivateRoute exact {...props} path='/admin_players/add_players/:id' component={AddEditPlayers} />
            <PrivateRoute exact {...props} path='/admin_players' component={AdminPlayers} />
            <PrivateRoute exact {...props} path='/admin_matches/edit_match' component={AddEditMatch} />
            <PrivateRoute exact {...props} path='/admin_matches/edit_match/:id' component={AddEditMatch} />
            <PrivateRoute exact {...props} path='/admin_matches' component={AdminMatches} />
            <PrivateRoute exact {...props} path='/dashboard' component={admin} />
            <PublicRoute exact {...props} restricted={true} component={SignIn} path="/sign_in" />
            <PublicRoute exact {...props} restricted={false} component={Home} path="/" />
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes;
