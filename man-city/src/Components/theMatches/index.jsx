import React, { Component } from 'react';
import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../ui/misc';

import LeagueTable from './table';
import MatchesList from './matchesList';


class TheMatches extends Component {

    state = {
        loadin: true,
        matches: [],
        filterMatches: [],
        playerFilter: 'All',
        resultFilter: 'All'
    }

    componentDidMount = () => {
        firebaseMatches.once('value').then(snapshot => {
            const matches = firebaseLooper(snapshot);

            this.setState({
                loadin: false,
                matches: reverseArray(matches),
                filterMatches: reverseArray(matches)
            })

        })
    }

    render() { 
        return (
            <div className='the_matches_container'>
                <div className='the_matches_wrapper'>
                    <div className='left'>
                        <div className="match_filters">
                            <div className='match_filter'>
                                <MatchesList matches={this.state.filterMatches} />
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <LeagueTable />
                    </div>
                </div>
            </div>
        );
    }
}

export default TheMatches;