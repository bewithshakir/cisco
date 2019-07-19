import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-style">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="input-group col-md-12">
                                        <input type="text" className="form-control input-box-position" placeholder="Bug ID" aria-label="bugID" aria-describedby="basic-addon1"></input>
                                        <div className="input-group-prepend symbol-div-style">
                                            <span className="input-group-text symbol-span-style" id="basic-addon1">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="row name-row-style">
                                    <div className="col-md-12 text-right">
                                    <i className="fa fa-bell"></i>
                                        <i className="fa fa-copy" style={{padding:'10px'}}></i>
                                        <span><img src="../../../assets/imgs/user.png" className="image-style" /></span><span className="namespace">Vipin Kumar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar