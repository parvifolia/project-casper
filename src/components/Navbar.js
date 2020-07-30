import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className='Navbar'>
            <div className="nav-wrapper">
                <div className="logo">
                <Link to='/'>
                    <h1>catwalk</h1>
                </Link>
                </div>
                <div className="account">
                    <Link to='/add'>
                    <div className="add">Add a cat</div>
                    </Link>
                    <div className="login">Login</div>
                    <div className="join">Join</div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
