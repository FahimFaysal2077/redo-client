import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const Admin = () => {

    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height:"100%"
    }

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <AdminSideBar></AdminSideBar>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                {/* <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                /> */}
                </div>
                <div className="col-md-5">
                    {/* <AppointmentsByDate appointments={appointments}></AppointmentsByDate> */}
                    <h1>Bangladesh</h1>
                </div>
            </div>
        </section>
    );
};

export default Admin;