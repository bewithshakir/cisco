import React from 'react';
import NavBar from '../components/navbar/Navbar';

const Help = (props) => {
    return (
        <React.Fragment>
            <NavBar bugId=''
                username='vipikum3'
                displayUsername='' 
                isSearchField={false}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="help-container">
                            <h1>Coming Soon</h1>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
};

export default Help;