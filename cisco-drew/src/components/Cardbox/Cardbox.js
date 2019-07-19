import React, { Component } from 'react';
import './Cardbox.css';

class Cardbox extends Component {
    render() {
        return (
            <div className="card-style">
                <div className="row">
                    <div className="col-md-4 padding-right-zero">
                        <div className="card first-card">
                            <div className="card-body">
                                <h5 className="card-title no-margin">TOTAL LOG FILES</h5>
                                <p className="card-text data-font-structuring" style={{marginBottom:'40px'}}>45</p>
                               <span style={{float:'right',color:'#d2d2d2'}}>Last Refresh June 29 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 padding-right-zero">
                        <div className="card second-card">
                            <div className="card-body">
                                <h5 className="card-title no-margin">RELATED & DUPLICATE FOUND</h5>
                                <p className="card-text data-font-structuring">12</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card third-card">
                            <div className="card-body">
                                <h5 className="card-title no-margin">TOPIC SEARCH FOUND</h5>
                                <p className="card-text data-font-structuring" style={{marginBottom:'10px'}}>14</p>
                                <h5 className="card-title no-margin">BUG SOCIAL NETWORK</h5>
                                <p className="card-text data-font-structuring">4 Users Found</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cardbox