import React, { useContext, useEffect, useState } from 'react';
import addService from '../../../images/addService.png';
import orderList from '../../../images/bookingList.png';
import makeAdmin from '../../../images/makeAdmin.png';
import manageServices from '../../../images/manageServices.png';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';
import { UserContext } from '../../../App';

const AdminSideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://sheltered-crag-04507.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between   py-5 px-4" style={{ height: "100vh", width: "34vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/orderList">
                        <img className="logo-image-small" src={orderList} alt="" /> <span className="text-font-sidebar-2">Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addServices">
                        <img className="logo-image-small" src={addService} alt="" /> <span className="text-font-sidebar-2">Add Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin">
                        <img className="logo-image-small" src={makeAdmin} alt="" /> <span className="text-font-sidebar-2">Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageServices">
                        <img className="logo-image-small" src={manageServices} alt="" /> <span className="text-font-sidebar-2">Manage Services</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSideBar;