import React from 'react';
import chair from '../../../images/chair.jpg';
import './HeaderMain.css';


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 id="header-text-main">Learn to Code <br/> In 1 Month</h1>
                <p className="text-secondary">Nothing is impossible. They say, So is <br/> learning programming in just a couple <br/> of months. All we need is your <br/> commitment only.</p>
                <button id="header-main-btn" className="btn btn-primary">Enroll Now</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid " style={{ height: "86vh" }}/>
            </div>
        </main>
    );
};

export default HeaderMain;