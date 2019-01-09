import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

import {firebasePlayers} from '../../../firebase';
import {firebaseLooper, reverseArray} from '../../ui/misc';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress';

class AdinPlayers extends Component {

    state = { 
        isLoading: true,
        players: []
    }

    componentDidMount = () => {
        firebasePlayers.once('value').then((snapshot) => {
            const players = firebaseLooper(snapshot);

        this.setState({
            isLoading: false,
            players: reverseArray(players)
        })
    })
    }

    render() {
        // console.log(this.state);
        return (
            
            <AdminLayout>
                <div>

                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Match</TableCell>
                                    <TableCell>Result</TableCell>
                                    <TableCell>Final</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.players ?
                                    this.state.players.map((player, id) => (
                                        <TableRow key={id} >
                                            <TableCell>
                                                <Link to={`/admin_players/add_players/${player.id}`}>
                                                    {player.name}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`/admin_players/add_players/${player.id}`}>
                                                    {player.lastname}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                {player.number}
                                            </TableCell>
                                            <TableCell>
                                                {player.position}
                                            </TableCell>
                                        </TableRow>
                                    )):
                                    null
                                }
                            </TableBody>
                        </Table>
                    </Paper>

                    <div className='admin_progress'>
                        { this.state.isLoading ?
                            <CircularProgress thickness={4} style={{color: '#98c5c9'}} />
                            :
                            ""
                        }
                    </div>

                </div>
            </AdminLayout>
            
         );
    }
}
 
export default AdinPlayers;