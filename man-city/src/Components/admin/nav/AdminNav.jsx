import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';


const AdminNav = () => {

const links = [
    {
        title: 'Matches',
        linkTo: '/admin_matches'
    },
    {
        title: 'Add Match',
        linkTo: '/admin_matches/edit_match'
    },
    {
        title: 'Players',
        linkTo: '/admin_players'
    },
    {
        title: 'Add Players',
        linkTo: '/admin_players/add_players'
    }
]


const style = {
    color: '#ffffff',
    fontWeight: '300',
    borderBottom:'1px solid #353535'
}


const renderItems = () => (
    links.map(link => (
        <Link to={link.linkTo} key={link.title}>
            <ListItem button style={style}>
                {link.title}
            </ListItem>
        </Link>
    ))
)


const handleLogOut = () => {
    firebase.auth().signOut().then(() => {
        console.log('log out successful');
    }, (erroe) =>{
        console.log('Error login out');
    })
}

    return ( 
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={() => handleLogOut()}>
                Log Out
            </ListItem>
        </div>
     );
}
 
export default AdminNav;