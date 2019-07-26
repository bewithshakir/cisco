import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';

import searchBg from '../../img/search-bg.png';
import drewLogo from '../../img/drew-logo.png';
import { loginUserAction } from '../../actions/loginAction';
import { bannerDataAction } from '../../actions/dashboardAction';
import { metaDataAction } from '../../actions/metaDataAction';
import NavBar from '../navbar/Navbar';




import './searchMain.css';

class SearchMain extends Component {
    state = {
        inputVal: '',
        errorMsg: false
    }
    componentDidMount() {
        this.props.loginUserAction();

        if (localStorage.bugId) {
            this.setState({ inputVal: localStorage.bugId });
        }
        if (localStorage.token) {
            this.props.metaDataAction(localStorage.token);
        }

        
    }
    handleSearch() {
        const token = localStorage.getItem('token');

        if (this.state.inputVal && token) {
            // this.props.history.push(`/dashboard?bugId=${this.state.inputVal}`);
            this.props.bannerDataAction(token, this.state.inputVal, this.props.history);

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
    resetField = ()=> {
        this.setState({inputVal: ''})
    }
    showError() {

    }
    render() {
        const { bannerData , metaData} = this.props;
        
        return (
            <React.Fragment>
                {/* <NavBar /> */}
                <div className="search-container">
                    <img src={searchBg} className="search-bg-img" />
                    {/* <div className="container">
                        <img src={drewLogo} className="drew-logo" />
                    </div> */}
                    <NavBar bugId={this.state.bugId}
                    history={this.props.history}
                    username={metaData ? metaData.username : 'vipikum3'}
                    displayUsername={metaData ? metaData.displayUsername : ''} 
                    isSearchField={false}/>


                    <div className="search-section">
                        <p className="search-hdr">Track your bug id</p>
                        <div style={{position: 'relative', display: 'flex', flex: '1'}}>
                            <input type="text" className="form-control" placeholder="Enter CDETS bug id, eg: CSCux72563" value={this.state.inputVal} onChange={this.onChange} />
                            {this.state.inputVal && (
                                <i className="fa fa-times" onClick={this.resetField}></i>
                            )}
                            <button className="btn btn-primary btn-search" onClick={() => this.handleSearch()} disabled={this.state.inputVal ? false: true}>Search</button>
                        </div>
                        
                        {(this.state.errorMsg || (bannerData.hasOwnProperty('isError'))) && (
                            ['danger'].map((variant, idx) => (
                                <Alert key={idx} variant={variant}>
                                    {bannerData.hasOwnProperty('isError') ? bannerData.errorMsg : 'Please fill the bug id'}
                            </Alert>
                            ))
                        )}
                        {/* {(bannerData.hasOwnProperty('isError')) && (
                            ['danger'].map((variant, idx) => (
                                <Alert key={idx} variant={variant}>
                                    {bannerData.errorMsg}
                                </Alert>
                            ))
                        )} */}
                    </div>
                </div>
            </React.Fragment>

        )
    }
};


const mapStateToProps = state => {
    return {
        token: state.loginData.token,
        bannerData: state.bannerData,
        metaData: state.metaData.data
    }
};

export default connect(mapStateToProps, {metaDataAction, loginUserAction, bannerDataAction })(SearchMain);