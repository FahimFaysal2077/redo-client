import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Teachers from '../Teachers/Teachers';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Feature from '../Feature/Feature';


const Home = () => {
    return (
        <div style={{
            background:'#FFFFFF'}}>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Feature></Feature>
            <Teachers></Teachers>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;