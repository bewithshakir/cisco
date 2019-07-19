import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner-container">
                <div className="row row-padding">
                    <div className="col-md-3">
                        <span className="lbl-heading">Bug ID:</span><span className="lbl-text">CSCvq11329</span>
                    </div>
                    <div className="col-md-6">
                        <span className="lbl-heading">CDET Link:</span><span className="lbl-text">https://cdetsng.cisco.com/webui/#view=CSCvq11329</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">To be Fixed:</span><span className="lbl-text">015.002</span>
                    </div>
                </div>
                <div className="row row-padding">
                    <div className="col-md-3">
                        <span className="lbl-heading">Submitter:</span><span className="lbl-text">jachikab</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Version:</span><span className="lbl-text">15.2(07)E</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Severity:</span><span className="lbl-text">severe</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Keywords:</span><span className="lbl-text">work port channel</span>
                    </div>
                  
                </div>
                <div className="row row-padding">
                    <div className="col-md-12">
                        <span className="lbl-heading">Headline:</span><span className="lbl-text">REP on port channel not working in 15.2(7)E (IE4000,IE4010, IE3000)</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner