import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { UserContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <div className="banner">
                <Link to="/"><img src={logo} alt="" /></Link>
                <div className="centered1 logo-container">CODE</div>
                <div className="centered2 logo-container">GLOBE</div>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto pr-5 mr-5">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 font-weight-bold" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 font-weight-bold" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 font-weight-bold" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 font-weight-bold" to="/contactUs">Contact Us</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 font-weight-bold" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="btn-book nav-link mr-5 font-weight-bold" to="/login">{loggedInUser?.email ? loggedInUser.name || loggedInUser.displayName || loggedInUser.email : "Login"}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;