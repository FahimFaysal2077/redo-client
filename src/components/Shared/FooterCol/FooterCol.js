import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCol.css';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="all-footer-text-header">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="all-footer-text">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;