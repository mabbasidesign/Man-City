
import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';

class Blocks extends Component {

    // constructor() {
    //     super();
    //     this.showMatches = this.showMatches.bind(this);
    // }
    
    state = { 
        matches: []
     }

    // componentDidMount () {
    //     firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
    //         console.log(snapshot.val());
    //     })
    // }

    showMatches = () => {
       return(
           <div> Matches </div>
       )
    }


    render() {
        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }

}
 
export default Blocks;