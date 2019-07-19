import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import Banner from '../Banner/Banner';
import './dashboard.css';
import Cardbox from '../Cardbox/Cardbox';

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar/>
                <Banner />
                <Cardbox />
            </div>
        )
    }
};
export default Dashboard;