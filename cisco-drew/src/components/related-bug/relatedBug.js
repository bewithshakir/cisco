import React, { Component } from 'react';
import './related-bug.css';

class RelatedBug extends Component {
    bugIds = ['CSCvp81672','CSCvp91438','CSCvp91438','CSCvp91438','CSCvp91438','CSCvp91438','CSCvp91438','CSCvp91438','CSCvp91438','CSCvp91438']
    render() {
        return (
            <div className="related-bug">
                <div className="table-heading-relatedbug">Related Bug/Duplicate Bug</div>
                <div className="related-tabs">
                {this.bugIds.map((colItem, colIndex) => {
                    return   <span key={colIndex} className="related-bug-id">{colItem}</span>
                })}
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <span className="lbl-heading">Related Bug ID:</span>
                        <span className="lbl-text">CSCvp81672</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Bug distance:</span>
                        <span className="lbl-text">10.421052043056436</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">DE:</span>
                        <span className="lbl-text">vadasser</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">DE Manager:</span>
                        <span className="lbl-text">rasrao</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Key Phrase:</span>
                        <span className="lbl-text">nan</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Keywords:</span>
                        <span className="lbl-text">802.1AS,Identity:,Master(ns)</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Severity:</span>
                        <span className="lbl-text">severe</span>
                    </div>
                    <div className="col-md-12">
                        <span className="lbl-heading">Key Feature:</span>
                        <span className="lbl-text">bf_attribute,bf_description,bf_headline,Pin,bf_de_manager,bf_severity</span>
                    </div>
                    <div className="col-md-12">
                        <span className="lbl-heading">Description:</span>
                        <span className="lbl-text">PTP Sync fail with ether channel in e2e mode</span>
                    </div>
                </div>
            </div>
        )
    }
};
export default RelatedBug;