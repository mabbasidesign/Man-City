import React, { Component } from 'react';
import Header from '../Components/Header-Footer/Header';

const Layout = (props) => {
    return ( 
        <div>
            <Header />
            { props.children }
        </div>
     );
}
 
export default Layout;
