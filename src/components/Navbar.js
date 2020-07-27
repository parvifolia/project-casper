import React from 'react';

const Navbar = () => {
    return ( 
        <div className='Navbar'>
            <div className="nav-wrapper">
                <div className="logo">
                    <h1>catwalk</h1>
                </div>
                <div className="account">
                    <div className="login">Login</div>
                    <div className="join">Join</div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
