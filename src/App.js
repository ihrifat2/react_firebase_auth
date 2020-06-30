import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/dash/Home'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/Auth';
import Welcome from './components/Welcome';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <div>
                        <ProtectedRoute exact path="/home" component={Home} />
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Registration} />
                    </div>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
