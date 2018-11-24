import React, { Component } from 'react';
import Featured from './Featured/index';
import Matches from './matches/index';
import MeetPlayers from './meetPlayers/index';

const Home = () => {
    return ( 
        <div className="bck_blue">
            <Featured />
            <Matches />
            <MeetPlayers />
        </div>
     );
}
 
export default Home;