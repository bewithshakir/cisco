import React, { Component } from 'react';
import searchBg from '../../img/search-bg.png';
import drewLogo from '../../img/drew-logo.png';

import './searchMain.css';

class SearchMain extends Component {
    handleSearch() {
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div className="search-container">
                <img src={searchBg} className="search-bg-img"/>
                <div className="container">
                    <img src={drewLogo} className="drew-logo"/>
                </div>
                <div className="search-section">
                    <p className="search-hdr">Track your bug id</p>
                    <input type="text" className="form-control" placeholder="Enter bug id"/>
                    <button className="btn btn-primary btn-search" onClick={()=> this.handleSearch()}>Search</button>
                </div>
            </div>
        )
    }
};

export default SearchMain;