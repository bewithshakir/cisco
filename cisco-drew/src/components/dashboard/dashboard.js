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
import { reproStepsAction } from '../../actions/dashboardAction';
import { bugKeywordsAction } from '../../actions/dashboardAction';
import { logInfoAction } from '../../actions/dashboardAction';
import { relatedBugsAction } from '../../actions/dashboardAction';



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

        this.setState({bugId: bugId})

        this.props.relatedBugsAction(token, bugId);
        this.props.logInfoAction(token, bugId);
        this.props.bugKeywordsAction(token, bugId);
       

        fetch('data/table-records.json').then(res => res.json()).then(data => {
            this.setState({
                tableConfig: {
                    tableHeadings: data[1].columns,
                    tableRecords: data[0].tableData,
                    tableBg: '#FFF',
                    tableHeaderBg: '#F5F5F5',
                    tableHeaderColor: '#1c345d',
                    tableBodyColor: '#1c345d',
                    tableHeaderText: 'Log Parser',
                    tableHeaderTextColor: '#1c345d',
                    tableRowsPerPage: 5,
                    isTableSearch: false
                }
            });
        });

        

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.metaData !== this.props.metaData) {
            const qValue = queryString.parse(this.props.location.search);
            const bugId = qValue.bugId;
            const token = localStorage.token;
            const cecId = nextProps.username ? nextProps.username : 'anand2';
            nextProps.reproStepsAction(token, bugId, cecId);
            console.log('nextProps.metaData', nextProps)
        }
    }
    render() {
        // console.log('ALL PROPS >>>>>>>', this.props)
        return (
            <div className="container-fluid" style={{ overflowX: 'hidden' }}>
                <NavBar bugId={this.state.bugId} history={this.props.history}/>
                <Banner />
                <Cardbox />
                <div className="row" style={{ marginTop: '-15px' }}>
                    <div className="col-md-4 tac-card">
                        <TacReproducible />
                    </div>
                    <div className="col-md-8" style={{ paddingLeft: '10px' }}>
                        <DataTableComp
                            headings={this.state.tableConfig.tableHeadings}
                            data={this.state.tableConfig.tableRecords}
                            tableBackground={this.state.tableConfig.tableBg}
                            tableHeaderBackground={this.state.tableConfig.tableHeaderBg}
                            tableHeadercolor={this.state.tableConfig.tableHeaderColor}
                            tableBodyColor={this.state.tableConfig.tableBodyColor}
                            tableHeaderText={this.state.tableConfig.tableHeaderText}
                            tableHeaderTextColor={this.state.tableConfig.tableHeaderTextColor}
                            tableRowsPerPage={this.state.tableConfig.tableRowsPerPage}
                            isTableSearch={this.state.tableConfig.isTableSearch} />
                    </div>
                </div>

                <RelatedBug />


            </div>
        )
    }
};
Dashboard.propTypes = {
    metaDataAction: propTypes.func.isRequired
}
const mapStateToProps = state => {
    // console.log('state---', state)
        // metaData: state.metaData.data,
        // bugKeyData: state.bugKeyWordsData,
        // bugRelatedData: state.relatedBugData,
        // logData: state.logInfoData,
        // reproStepsData: state.reproStepsData
    return {
        metaData: state.metaData.data,
        bugKeyData: state.bugKeywordData,
        bugRelatedData: state.relatedBugData,
        logData: state.logInfoData,
        bugReproData: state.reproStepsData
        
    }
};
export default connect(mapStateToProps, {
    metaDataAction,
    reproStepsAction,
    bugKeywordsAction,
    logInfoAction,
    relatedBugsAction
})(Dashboard);