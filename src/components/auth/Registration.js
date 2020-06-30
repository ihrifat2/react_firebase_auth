import React, { useCallback, useState } from "react"
import { withRouter } from "react-router"
import app from "../FirebaseInfo"
import { Link } from "react-router-dom"

function Registration({ history }) {
    const [error, seterror] = useState()
    const handleRegistration = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            history.push("/home")
        } catch (error) {
            seterror(error)
        }
    }, [history])

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleRegistration}>
                <div>
                    <label> Email </label>
                    <input name="email" type="email" placeholder="Email" />
                </div>
                <div>
                    <label> Password </label>
                    <input name="password" type="password" placeholder="Password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {
                error ? 
                <p style={{color: 'red', fontSize: '20px'}}>{error.message}</p> : 
                ''
            }
            <p>Already have an account? Go to <Link to="/login">Login</Link></p>
        </div>
    )
}

export default withRouter(Registration)