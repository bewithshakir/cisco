import React, { Component } from 'react';
import './related-bug.css';
import className from 'classnames';

class RelatedBug extends Component {
    bugIds = ['CSCvp81672', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438'];
    state = {
        data: '',
        selectedRecords: [],
        tabsData: [],
        selectedRecord: {},
        currentIndex: 0
    };
    componentDidMount() {
        this.setState({
            data: this.props.relatedBugData.list_of_rel_bugs,
            selectedRecords: this.props.relatedBugData.list_of_rel_bugs.slice(0, 10),
            tabsData: this.props.relatedBugData.list_of_rel_bugs.slice(0, 10).map(bug => bug)
        });

    }
    renderSelectedTab(data, selectedRecord) {
        
        if (data.length) {
            const selectedData = Object.keys(selectedRecord).length ? null : data[0];

            if (Object.keys(selectedRecord).length) {
                return (
                    <React.Fragment>
                        <div className="row">
                            <div className="col-md-3">
                                <span className="lbl-heading">Related Bug ID:</span>
                                <span className="lbl-text">{selectedRecord.bug_id}</span>
                            </div>
                            <div className="col-md-3">
                                <span className="lbl-heading">Bug distance:</span>
                                <span className="lbl-text">{selectedRecord.bug_distance}</span>
                            </div>
                            <div className="col-md-3">
                                <span className="lbl-heading">DE:</span>
                                <span className="lbl-text">{selectedRecord.de}</span>
                            </div>
                            <div className="col-md-3">
                                <span className="lbl-heading">DE Manager:</span>
                                <span className="lbl-text">{selectedRecord.de_mgr}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <span className="lbl-heading">Keywords:</span>
                                <span className="lbl-text">{selectedRecord.keywords}</span>
                            </div>
                            <div className="col-md-3">
                                <span className="lbl-heading">Severity:</span>
                                <span className="lbl-text">{selectedRecord.severity}</span>
                            </div>
                            <div className="col-md-6">
                                <span className="lbl-heading">Key Feature:</span>
                                <span className="lbl-text">{selectedRecord.key_feature}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <span className="lbl-heading">Key Phrase:</span>
                                <span className="lbl-text">{selectedRecord.key_phrase}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <span className="lbl-heading">Headline:</span>
                                <span className="lbl-text">{selectedRecord.headline}</span>
                            </div>
                        </div >
                    </React.Fragment>
                )
            } else {
                if (selectedData) {
                    return (
                        // <div className="bug">{selectedData[0].bug_id}</div>
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-3">
                                    <span className="lbl-heading">Related Bug ID:</span>
                                    <span className="lbl-text">{selectedData.bug_id}</span>
                                </div>
                                <div className="col-md-3">
                                    <span className="lbl-heading">Bug distance:</span>
                                    <span className="lbl-text">{selectedData.bug_distance}</span>
                                </div>
                                <div className="col-md-3">
                                    <span className="lbl-heading">DE:</span>
                                    <span className="lbl-text">{selectedData.de}</span>
                                </div>
                                <div className="col-md-3">
                                    <span className="lbl-heading">DE Manager:</span>
                                    <span className="lbl-text">{selectedData.de_mgr}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <span className="lbl-heading">Keywords:</span>
                                    <span className="lbl-text">{selectedData.keywords}</span>
                                </div>
                                <div className="col-md-3">
                                    <span className="lbl-heading">Severity:</span>
                                    <span className="lbl-text">{selectedData.severity}</span>
                                </div>
                                <div className="col-md-6">
                                    <span className="lbl-heading">Key Feature:</span>
                                    <span className="lbl-text">{selectedData.key_feature}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="lbl-heading">Key Phrase:</span>
                                    <span className="lbl-text">{selectedData.key_phrase}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="lbl-heading">Headline:</span>
                                    <span className="lbl-text">{selectedData.headline}</span>
                                </div>
                            </div >
                        </React.Fragment>
                    )
                }
            }
        }
        
    }
    onTabClick(e, selectedRecord, index) {
        e.preventDefault();
        this.setState({ 
            selectedRecord: selectedRecord,
            currentIndex: index
         })
    }
    render() {
        const { selectedRecords, tabsData, selectedRecord } = this.state;
        return (
            <div className="banner-container-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-heading-relatedbug">Related Bug/Duplicate Bug</div>
                            {/* <div className="related-tabs">
                                {selectedRecords.map((selectedItem, colIndex) => {
                                    return <span key={colIndex} className="related-bug-id" onClick={() => this.onTabClick(selectedItem)}>{selectedItem.bug_id}</span>
                                })}
                            </div> */}

                            <ul className="nav nav-tabs">
                            {selectedRecords.map((selectedItem, colIndex) => {
                               return <li className="nav-item" key={colIndex} onClick={(e) => this.onTabClick(e, selectedItem, colIndex)}>
                                    <a className= {className('nav-link', { active: colIndex === this.state.currentIndex })} href="#">{selectedItem.bug_id}</a>
                                </li>
                            })}
                            </ul>
                            <div className="tab-dedtail-container">
                                {this.renderSelectedTab(selectedRecords, selectedRecord)}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default RelatedBug;