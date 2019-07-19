import React, { Component } from 'react';
import searchBg from '../../img/search-bg.png';

class SearchMain extends Component {
    render() {
        return (
            <div className="search-container">
                <img src={searchBg} className="search-bg-img"/>
                <div className="search-section">
                    <input type="text"/>
                    <button className="btn">Search</button>
                </div>
            </div>
        )
    }
};

export default SearchMain;