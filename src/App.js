import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Navbar from './components/Shared/Navbar/Navbar';
import Transaction from './components/Transaction/Transaction/Transaction';
import Admin from './components/Admin/Admin/Admin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddService from './components/Admin/AddService/AddService';
import CustomerReview from './components/Transaction/CustomerReview/CustomerReview';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Navbar></Navbar>
            <Transaction></Transaction>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Navbar></Navbar>
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addServices">
            <Navbar></Navbar>
            <AddService></AddService>
          </Route>
          <Route path="/addReview">
            <Navbar></Navbar>
            <CustomerReview></CustomerReview>
          </Route>
          <Route path="/login">
            <Navbar></Navbar>
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;