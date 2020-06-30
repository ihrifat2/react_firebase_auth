import React from 'react'
import app from "../FirebaseInfo"

function Home(props) {
    return (
        <div>
            <h1>Welcome Home</h1>
            <button onClick={() => app.auth().signOut()}>Log out</button>
        </div>
    )
}

export default Home