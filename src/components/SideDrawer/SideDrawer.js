import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <div style={{height: '50px', marginTop: '25px'}}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/menu'><li>Menu</li></Link>
                </div>
                <div style={{marginBottom: '40px', color: 'white', textAlign: 'center'}}>
                    <p>1409 S State St</p>
                    <p>Provo, UT</p>
                    <p>(801) 427-4677</p>
                </div>
            </ul>
        </nav>
    )
}

export default SideDrawer;