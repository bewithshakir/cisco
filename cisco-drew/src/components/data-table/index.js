import React, { Component } from 'react';
import './index.css';
import Pagination from "./Pagination";

class DataTableComp extends Component {
    tableData = []; // this.props.data;
    columns = []; // this.props.headings;
    state = {
        data: [],
        sort: {
            column: null,
            direction: 'desc',
        },
        currentPage: 1,
        currentRecord: [],
        textVal: '',
        holdedTableData: [],
        allTableRecords: [],
        paginationParams: {},
        tableConfigData: {
            tblBg: '',
            tblHeaderBg: '',
            tblHeaderColor: '',
            tblBodyColor: '',
            tblRowsPerPage: 0
        }
    };
    sortFields(colData) {
        if (colData.sortOrder === 'asc') {
            colData.sortOrder = 'desc';
        } else {
            colData.sortOrder = 'asc';
        }

        console.log('columnId', colData, this.state);
    }
    getSortIcon(colName) {
        let className = 'fa fa-sort';

        if (this.state.sort.column === colName) {
            className += this.state.sort.direction === '-asc' ? '-asc' : '-desc';
        }
        return className;
    }
    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        this.sortDataUsingKey(column, direction);
    };

    sortDataUsingKey(column, direction) {
        const sortedData = this.state.data.sort((a, b) => {
            const nameA = a[column] // ignore upper and lowercase
            const nameB = b[column] // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
        if (direction === 'desc') {
            sortedData.reverse();
        }

        this.setState({
            data: sortedData,
            sort: {
                column,
                direction,
            }
        });

    }

    componentWillReceiveProps(nextProps) {
        this.tableData = nextProps.data;
        this.columns = nextProps.headings;
        this.setState({ data: nextProps.data });
        this.setState({ allTableRecords: nextProps.data });
        this.setState({
            tableConfigData: {
                tblBg: nextProps.tableBackground,
                tblHeaderBg: nextProps.tableHeaderBackground,
                tblHeaderColor: nextProps.tableHeadercolor,
                tblBodyColor: nextProps.tableBodyColor,
                tblheadertext: nextProps.tableHeaderText,
                tblHeaderTxtColor: nextProps.tableHeaderTextColor,
                tblRowsPerPage: nextProps.tableRowsPerPage,
                isTblSearch: nextProps.isTableSearch
            }
        });
    }
    onPageChanged = data => {
        this.setState({ paginationParams: data });
        if (this.state.allTableRecords.length) {
            const { allTableRecords } = this.state;
            const { currentPage, totalPages, pageLimit } = data;

            const offset = (currentPage - 1) * pageLimit;
            const currentRecord = allTableRecords.slice(offset, offset + pageLimit);

            this.setState({ currentPage, currentRecord, totalPages });
            this.setState({ holdedTableData: currentRecord });
        }

    };

    handleChange = (evt) => {
        this.setState({ textVal: evt.target.value });
        setTimeout(() => {
            const keyToSearch = this.state.textVal;
            var filteredRes = this.state.holdedTableData.filter(item => {
                for (let key in item) {
                    let v = item[key] && item[key].toString().toLowerCase();
                    if (v && v.indexOf(keyToSearch.toLowerCase()) !== -1) {
                        return true;
                    }
                }
                return false;
            });
            this.setState({ currentRecord: filteredRes });
        }, 0);

    }
    getProgressClass(data) {
        if (data < 90) {
            return 'red-progress'
        } else if (data >= 90 && data <= 99) {
            return 'view-progress'
        }
        else {
            return 'green-progress'
        }
    }

    render() {
        return <React.Fragment>
            <div className="card card-table table-bg-color">
                <div className="table-heading" style={{ color: this.state.tableConfigData.tblHeaderTxtColor }}>{this.state.tableConfigData.tblheadertext}
                    <span style={{float:'right',cursor:'pointer'}}><i className="fa fa-download"></i></span> 
                    <span style={{float:'right',paddingRight:'10px',cursor:'pointer'}}><i className="fa fa-expand"></i></span>
                </div>

                {this.state.tableConfigData.isTblSearch && <input type="text" value={this.state.textVal} className="form-control" placeholder="Enter the Search Criteria" onChange={this.handleChange}></input>}
                
                
                <table className="table">
                    <thead>
                        <tr style={{ background: this.state.tableConfigData.tblHeaderBg }}>
                            {this.columns.map((res, index) => {
                                return <th scope="col" key={index} onClick={this.onSort(res.id)} style={{ color: this.state.tableConfigData.tblHeaderColor }}>
                                    <span className="table-header">{res.Header} &nbsp;
                                    {this.state.sort.column !== null && this.state.sort.column === res.id && <i className={this.state.sort.direction === 'asc' ? 'fa fa-sort-asc' : 'fa fa-sort-desc'}></i>}
                                        {this.state.sort.column === null && this.state.sort.column !== res.id && <i className="fa fa-sort"></i>}
                                        {this.state.sort.column !== null && this.state.sort.column !== res.id && <i className="fa fa-sort"></i>}
                                    </span></th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.currentRecord.map((resData, index) => {
                            return <tr key={index}>
                                {this.columns.map((colItem, colIndex) => {
                                    return <td key={colIndex}>
                                       <div>{resData[colItem.id]}</div>
                                    </td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>

                {this.state.allTableRecords.length && this.state.tableConfigData.tblRowsPerPage && <Pagination
                    totalRecords={this.tableData.length}
                    pageLimit={this.state.tableConfigData.tblRowsPerPage}
                    pageNeighbours={1}
                    onPageChanged={this.onPageChanged} />}

            </div>

        </React.Fragment>
    }
}

export default DataTableComp