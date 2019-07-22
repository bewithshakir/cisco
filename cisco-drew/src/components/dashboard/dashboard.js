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
import { loginUser } from '../../actions/authActions';

class Dashboard extends Component {
    state = {
        tableConfig: { tableHeadings: [], tableRecords: [] }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.props.loginUser();
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
        console.log('search parassssm', qValue)
    }
    render() {
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
    return { auth : {name: 'shakir'}}
};
export default connect(mapStateToProps, { loginUser })(Dashboard);