import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';

import searchBg from '../../img/search-bg.png';
import drewLogo from '../../img/drew-logo.png';
import { loginUserAction } from '../../actions/loginAction';
import { bannerDataAction } from '../../actions/dashboardAction';


import './searchMain.css';

class SearchMain extends Component {
    state = {
        inputVal: '',
        errorMsg: false,
    }
    componentDidMount() {
        this.props.loginUserAction();

        // const qValue = queryString.parse(this.props.location.search);
        // if (qValue.bugId) {
        //     localStorage.setItem('bugId', qValue.bugId);
        //     this.props.bannerDataAction(token, qValue.bugId);
        // }
    }
    handleSearch() {
        const token = localStorage.getItem('token');
        
        if (this.state.inputVal && token) {
            // this.props.history.push(`/dashboard?bugId=${this.state.inputVal}`);
            this.props.bannerDataAction(token, this.state.inputVal, this.props.history)
            
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
        const {bannerData } = this.props;

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
                    {bannerData.hasOwnProperty('isError') && (
                        ['danger'].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                {bannerData.errorMsg}
                            </Alert>
                        ))
                    )}
                </div>
            </div>
        )
    }
};


const mapStateToProps = state => {
    console.log('state search', state)
    return {
        token: state.loginData.token,
        bannerData: state.bannerData
    }
};

export default connect(mapStateToProps, { loginUserAction, bannerDataAction })(SearchMain);