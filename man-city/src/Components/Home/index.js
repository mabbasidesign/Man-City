import React, { Component } from 'react';
import Featured from './Featured/index';
import Matches from './matches/index';

const Home = () => {
    return ( 
        <div className="bck_blue">
            <Featured />
            <Matches />
        </div>
     );
}
 
export default Home;