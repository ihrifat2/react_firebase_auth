import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(props) {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/login">Login</Link> | 
            <Link to="/registration"> Registration</Link>
        </div>
    );
}

export default Welcome;