import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import Banner from '../Banner/Banner';
import './dashboard.css';
import Cardbox from '../Cardbox/Cardbox';
import DataTableComp from '../data-table/index';

class Dashboard extends Component {
    state = {
        tableConfig: { tableHeadings: [], tableRecords: [] }
    }
    componentDidMount() {
        fetch('data/table-records.json').then(res => res.json()).then(data => {
            this.setState({
                tableConfig: {
                    tableHeadings: data[1].columns,
                    tableRecords: data[0].tableData,
                    tableBg:'#162b4c',
                    tableHeaderBg:'#1c345d',
                    tableHeaderColor:'#4e7ac9',
                    tableBodyColor:'#FFF',
                    tableHeaderText:'Related and Duplicate Bugs',
                    tableHeaderTextColor:'#FFF',
                    tableRowsPerPage:5,
                    isTableSearch:false
                }
            });
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                <Banner />
                <Cardbox />
                <div className="row">
                    <div className="col-md-4">sss</div>
                    <div className="col-md-8">
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
            </div>
        )
    }
};
export default Dashboard;