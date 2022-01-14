import './App.css';
import { useState } from 'react';
import { authentication } from './Firebase';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [signedIn, setSignedIn] = useState(false);

  // firebase authentication listener
  authentication.onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      setSignedIn(true);
    } else {
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
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={protectedRoute(<Dashboard />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;