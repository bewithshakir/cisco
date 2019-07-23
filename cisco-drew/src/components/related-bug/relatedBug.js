import React, { Component } from 'react';
import './related-bug.css';

class RelatedBug extends Component {
    bugIds = ['CSCvp81672', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438', 'CSCvp91438'];
    state = {
        data: '',
        selectedRecords: [],
        tabsData: [],
        selectedRecord: {}
    };
    componentDidMount() {
        this.setState({
            data: this.props.relatedBugData.list_of_rel_bugs,
            selectedRecords: this.props.relatedBugData.list_of_rel_bugs.slice(0, 10),
            tabsData: this.props.relatedBugData.list_of_rel_bugs.slice(0, 10).map(bug => bug)
        });

    }
    renderSelectedTab(data, selectedRecord) {
        if (data) {
            console.log('selectedRecord---', selectedRecord)
            const selectedData = data.filter(obj => obj.bug_id === 'CSCvc76449- duplicate');


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
                if (selectedData.length > 0) {
                    return (
                        // <div className="bug">{selectedData[0].bug_id}</div>
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-3">
                                    <span className="lbl-heading">Related Bug ID:</span>
                                    <span className="lbl-text">{selectedData[0].bug_id}</span>
                                </div>
                                <div className="col-md-3">
                                    <span className="lbl-heading">Bug distance:</span>
                                    <span className="lbl-text">{selectedData[0].bug_distance}</span>
                                </div>
                                <div className="col-md-3">
                                    <span className="lbl-heading">DE:</span>
                                    <span className="lbl-text">{selectedData[0].de}</span>
                                </div>
                                <div className="col-md-3">
                                    <span className="lbl-heading">DE Manager:</span>
                                    <span className="lbl-text">{selectedData[0].de_mgr}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <span className="lbl-heading">Keywords:</span>
                                    <span className="lbl-text">{selectedData[0].keywords}</span>
                                </div>
                                <div className="col-md-3">
                                    <span className="lbl-heading">Severity:</span>
                                    <span className="lbl-text">{selectedData[0].severity}</span>
                                </div>
                                <div className="col-md-6">
                                    <span className="lbl-heading">Key Feature:</span>
                                    <span className="lbl-text">{selectedData[0].key_feature}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="lbl-heading">Key Phrase:</span>
                                    <span className="lbl-text">{selectedData[0].key_phrase}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="lbl-heading">Headline:</span>
                                    <span className="lbl-text">{selectedData[0].headline}</span>
                                </div>
                            </div >
                        </React.Fragment>
                    )
                }
            }
        }
    }
    onTabClick(selectedRecord) {
        this.setState({ selectedRecord: selectedRecord })
    }
    render() {
        const { selectedRecords, tabsData, selectedRecord } = this.state;
        return (
            <div className="related-bug">
                <div className="table-heading-relatedbug">Related Bug/Duplicate Bug</div>
                <div className="related-tabs">
                    {selectedRecords.map((selectedItem, colIndex) => {
                        return <span key={colIndex} className="related-bug-id" onClick={() => this.onTabClick(selectedItem)}>{selectedItem.bug_id}</span>
                    })}
                </div>
                {this.renderSelectedTab(selectedRecords, selectedRecord)}


            </div>
        )
    }
};
export default RelatedBug;