import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/register'>Register</Link>
                <Link className='ms-3' to='/login'>Login</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Main;