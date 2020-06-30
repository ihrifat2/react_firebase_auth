import React, { useCallback, useContext, useState } from "react"
import { withRouter, Redirect } from "react-router"
import app from "../FirebaseInfo"
import { AuthContext } from "../Auth";
import { Link } from "react-router-dom";

function Login({ history }) {
    const [error, seterror] = useState()
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/home");
            } catch (error) {
                seterror(error)
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/home" />;
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label> Email </label>
                    <input name="email" type="email" placeholder="Email" />
                </div>
                <div>
                    <label> Password </label>
                    <input name="password" type="password" placeholder="Password" />
                </div>
                <button type="submit">Log in</button>
            </form>
            {
                error ? 
                <p style={{color: 'red', fontSize: '20px'}}>{error.message}</p> : 
                ''
            }
            <p>New Here? Go to <Link to="/registration">Registration</Link> </p>
        </div>
    );
}

export default withRouter(Login);