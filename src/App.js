import './App.css';
import { useState, createContext } from 'react';
import { authentication } from './Firebase';
import { signOut } from "firebase/auth";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const LogOut = () => {
    signOut(authentication).then(() => {
        window.location.href = "/Login"
    })
    return null;
}

export const UserContext = createContext('user');

function App() {
    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(undefined);


    // firebase authentication listener
    authentication.onAuthStateChanged((user) => {
        if (user) {
            setUser(user);
            setSignedIn(true);
        } else {
            setUser(undefined);
            setSignedIn(false);
        }
    })

    // if user is signed in, allow user to view page/component
    const protectedRoute = (component) => {
        if (signedIn) {
            return component
        }
        return <Login />
    }

    return (
        <BrowserRouter>
            <UserContext.Provider value={user}>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Logout" element={<LogOut />} />
                    <Route path="/" element={protectedRoute(<Dashboard />)} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;