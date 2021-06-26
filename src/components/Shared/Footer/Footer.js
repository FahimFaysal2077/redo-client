import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Code Globe" , link: "/"},
        {name: "Cool and Perfect Snippet code"},
        {name: "We create awesome code snippets that will help you in creating your own beautiful site."},
    ]
    const ourAddress = [
        {name: "Dhaka, City Capital Read-1200" , link: "//google.com/map"},
        {name: "TG Tower" , link: "//google.com/map"},
       
    ]
    const explore = [
        {name: "Home" , link: "/"},
        {name: "About" , link: "/about"},
        {name: "Careers" , link: "/careers"},
        {name: "Login" , link: "/login"}
    ]
    const services = [
        {name: "IT Consulting", link: "/consulting"},
        {name: "Development", link: "/development"},
        {name: "Cloud", link: "/cloud"},
        {name: "DevOps & Support" , link: "/support"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Explore" menuItems={explore}/>
                    <FooterCol key={3} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon social icon-1" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon social icon-2" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon social icon-3" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 contact-number">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+88 01796582287</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className="footer-text">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;