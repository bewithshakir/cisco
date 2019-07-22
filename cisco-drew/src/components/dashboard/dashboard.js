import React, { Component } from 'react';
import './dashboard.css';
import queryString from 'query-string';
import { connect } from 'react-redux';

import NavBar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Cardbox from '../cardbox/Cardbox';
import DataTableComp from '../data-table/index';
import TacReproducible from '../tacReproStep/TAC_Reproducible';
import RelatedBug from '../related-bug/relatedBug';
import {metaDataAction} from '../../actions/metaDataAction';
import {loginUserAction} from '../../actions/loginAction';
import { bannerDataAction } from '../../actions/dashboardAction';


class Dashboard extends Component {
    state = {
        tableConfig: { tableHeadings: [], tableRecords: [] },
        metaData: '',
        dashboardData: { bannerData: ''}
    }
    componentWillMount() {
    }
    componentDidMount() {
        
        this.props.loginUserAction();
        

        console.log('componentDid mount', this.props)
        
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
        const qValue = queryString.parse(this.props.location.search);
        if (qValue.bugId) {
            debugger
            localStorage.setItem('bugId', qValue.bugId);
            this.props.bannerDataAction(localStorage.token, qValue.bugId);
            
        }
    }
    componentWillReceiveProps(nextProps, state) {
        // if (this.props.hasOwnProperty('token')) {
        //     if (this.props.token) {
        //         this.props.metaDataAction(this.props.token);
        //     }
        // }
        console.log('metaData', nextProps);
        const dashboardData = {...this.state.dashboardData};

        this.setState({metaData: nextProps.metaData});
        
        this.setState(prevState => ({
            dashboardData: {                   // object that we want to update
                ...prevState.dashboardData,    // keep all other key-value pairs
                bannerData:  nextProps.bannerData     // update the value of specific key
            }
        }))

        // this.setState({});
        // console.log('propp', nextProps)
        if (nextProps.token !== this.props.token) {
            this.props.metaDataAction(nextProps.token);
            this.setState({metaData: nextProps.metaData});
            
        }
    }
    render() {
        console.log('dsfsdf', this.state)
        return (
            <div className="container-fluid" style={{overflowX:'hidden'}}>
                <NavBar />
                <Banner />
                <Cardbox />
                <div className="row" style={{ marginTop: '-15px' }}>
                    <div className="col-md-4 tac-card">
                        <TacReproducible />
                    </div>
                    <div className="col-md-8" style={{paddingLeft: '10px'}}>
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

const mapStateToProps = state => {
    console.log('state', state)
    // auth: state.auth,
    // errors: state.errors

    return { 
        token: state.auth.token,
        metaData : state.metaData.data,
        bannerData: state.bannerData
    }
};
export default connect(mapStateToProps, { metaDataAction, loginUserAction, bannerDataAction })(Dashboard);