import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';

import searchBg from '../../img/search-bg.png';
import drewLogo from '../../img/drew-logo.png';
import { loginUser } from '../../actions/authActions';


import './searchMain.css';

class SearchMain extends Component {
    state = {
        inputVal: '',
        errorMsg: false,
    }
    componentDidMount() {
        if (localStorage.jwtToken) {
            this.setState({ inputVal: localStorage.jwtToken })
        }
    }
    handleSearch() {
        if (this.state.inputVal) {
            this.props.loginUser(this.props.history);
        } else {
            this.setState({ errorMsg: true });
        }
    }
    onChange = (e) => {
        this.setState({
            inputVal: e.target.value,
            errorMsg: false
        });
    }
    render() {
        return (
            <div className="search-container">
                <img src={searchBg} className="search-bg-img" />
                <div className="container">
                    <img src={drewLogo} className="drew-logo" />
                </div>
                <div className="search-section">
                    <p className="search-hdr">Track your bug id</p>
                    <input type="text" className="form-control" placeholder="Enter cdets bug id, eg: CSCux72563" value={this.state.inputVal} onChange={this.onChange} />
                    <button className="btn btn-primary btn-search" onClick={() => this.handleSearch()}>Search</button>
                    {this.state.errorMsg && (
                        ['danger'].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                Please fill the bug id
                            </Alert>
                        ))
                    )}
                </div>
            </div>
        )
    }
};


const mapStateToProps = state => ({
    // auth: state.auth,
    // errors: state.errors
});

export default connect(null)(SearchMain);