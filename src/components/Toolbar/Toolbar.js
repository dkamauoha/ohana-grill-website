import React from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggle';

import './Toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <Link to='/' className='toolbar__logo-link'><div className="toolbar__logo">OHANA GRILL</div></Link>
            <div className='spacer'></div>
            <div className="toolbar__navigation-items">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/menu'><li>Menu</li></Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar