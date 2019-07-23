import React, { Component } from 'react';
import './dashboard.css';
import propTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';

import NavBar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Cardbox from '../cardbox/Cardbox';
import DataTableComp from '../data-table/index';
import TacReproducible from '../tacReproStep/TAC_Reproducible';
import RelatedBug from '../related-bug/relatedBug';
import { metaDataAction } from '../../actions/metaDataAction';
import {
    reproStepsAction,
    bugKeywordsAction,
    logInfoAction,
    relatedBugsAction,
    bannerDataAction
} from '../../actions/dashboardAction';



class Dashboard extends Component {
    state = {
        tableConfig: { tableHeadings: [], tableRecords: [] },
        metaData: '',
        dashboardData: { bannerData: '' },
        bugId: ''
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    componentDidMount() {
        const qValue = queryString.parse(this.props.location.search);
        const bugId = qValue.bugId;
        const token = localStorage.token;
        this.props.metaDataAction(token);

        this.setState({ bugId: bugId })

        this.props.relatedBugsAction(token, bugId);
        this.props.logInfoAction(token, bugId);
        this.props.bugKeywordsAction(token, bugId);
        this.props.bannerDataAction(token, bugId);


        this.setState({
            tableConfig: {
                tableHeadings: [
                    {
                        "Header": "LOG NAME",
                        "id": "log_name"
                    },
                    {
                        "Header": "ERROR MESSAGE",
                        "id": "err_msg"
                    },
                    {
                        "Header": "FILE PATH",
                        "id": "file_path"
                    }
                ],
                tableRecords: this.props.logData,
                tableBg: '#FFF',
                tableHeaderBg: '#F5F5F5',
                tableHeaderColor: '#1c345d',
                tableBodyColor: '#1c345d',
                tableHeaderText: 'Log Parser',
                tableHeaderTextColor: '#1c345d',
                tableRowsPerPage: 1,
                isTableSearch: false
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.metaData !== this.props.metaData) {
            const qValue = queryString.parse(this.props.location.search);
            const bugId = qValue.bugId;
            const token = localStorage.token;
            const cecId = nextProps.username ? nextProps.username : 'anand2';
            nextProps.reproStepsAction(token, bugId, cecId);
        }
    }
    renderBanner(bannerData) {
        if (bannerData.bug_id) {
            return <Banner bannerData={bannerData.bug_id ? this.props.bannerData : ''} />
        } else {
            return <div className="banner-container"><div style={{
                color: '#FFF',
                textAlign: 'center',
                paddingTop: '50px'
            }}>No Bug info available for entered bug id !</div></div>
        }
    }
    renderRelatedBug(bugRelatedData) {
        if (bugRelatedData.bug_id) {
            return <RelatedBug relatedBugData={bugRelatedData.bug_id ? this.props.bugRelatedData : ''} />
        } else {
            return <div className="banner-container" style={{ margin: '5px 10px 5px 15px',borderRadius:'5px'}}><div style={{
                color: '#FFF',
                textAlign: 'center',
                paddingTop: '50px'
            }}>No related bug information available for entered bug id !</div></div>
        }
    }

    renderLogInfoTable(logInfoData) {
        console.log('----logInfodata', logInfoData)
        if (logInfoData && logInfoData.bug_id) {
            return (
                <React.Fragment>
                    <div className="log-table">
                        <DataTableComp
                            headings={this.state.tableConfig.tableHeadings}
                            data={logInfoData.bug_id ? this.props.logData.list_log_info : ''}
                            tableBackground={this.state.tableConfig.tableBg}
                            tableHeaderBackground={this.state.tableConfig.tableHeaderBg}
                            tableHeadercolor={this.state.tableConfig.tableHeaderColor}
                            tableBodyColor={this.state.tableConfig.tableBodyColor}
                            tableHeaderText={this.state.tableConfig.tableHeaderText}
                            tableHeaderTextColor={this.state.tableConfig.tableHeaderTextColor}
                            tableRowsPerPage={this.state.tableConfig.tableRowsPerPage}
                            isTableSearch={this.state.tableConfig.isTableSearch} />
                    </div>
                </React.Fragment>)
        } else {
            return <div className="banner-container-table card card-table table-bg-color" style={{marginRight: '15px'}}>
                <div style={{padding:'20px'}}>No Log Info available for entered bug id !</div></div>
        }
    }

    render() {
        const { bannerData, metaData, bugRelatedData, logData } = this.props;
        console.log('this.props', this.props);
        return (
            <div className="container-fluid" style={{ overflowX: 'hidden' }}>
                <NavBar bugId={this.state.bugId}
                    history={this.props.history}
                    username={metaData ? metaData.username : 'vipikum3'}
                    displayUsername={metaData ? metaData.displayUsername : ''} />

                {this.renderBanner(bannerData)}

                <Cardbox />
                <div className="row" style={{ marginTop: '-15px' }}>
                    <div className="col-md-4 tac-card">
                        <TacReproducible />
                    </div>
                    <div className="col-md-8" style={{ paddingLeft: '10px' }}>
                        {this.renderLogInfoTable(logData)}
                    </div>
                </div>

                {this.renderRelatedBug(bugRelatedData)}

            </div>
        )
    }
};
Dashboard.propTypes = {
    metaDataAction: propTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        metaData: state.metaData.data,
        bugKeyData: state.bugKeywordData,
        bugRelatedData: state.relatedBugData,
        logData: state.logInfoData,
        bugReproData: state.reproStepsData,
        bannerData: state.bannerData

    }
};
export default connect(mapStateToProps, {
    metaDataAction,
    reproStepsAction,
    bugKeywordsAction,
    logInfoAction,
    relatedBugsAction,
    bannerDataAction
})(Dashboard);