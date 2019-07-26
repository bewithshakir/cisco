import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoCisco from '../../img/cisco-logo.png';
import { ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

class Navbar extends Component {
    state = { bugId: '', username: '', displayUserName: '', isSearchField: true}
    componentDidMount() {
        if (!this.props.isSearchField) {
            this.setState({isSearchField: this.props.isSearchField});
        }
    }
    componentWillReceiveProps(nextPros) {
        if (nextPros.bugId !== this.props.bugId) {
            this.setState({ bugId: nextPros.bugId })
            this.setState({ username: nextPros.username });
            this.setState({ displayUserName: nextPros.displayUserName });

        }
        
    }
    handleChange = (e) => {
        let val = e.target.value;
        this.setState({ bugId: val })
    }
    searchData(e) {
        if (e.keyCode === 13) {
            // console.log(this.state.bugId)
            this.props.history.push(`/dashboard?bugId=${this.state.bugId}`)
        }
    }
    resetField = ()=> {
        this.setState({bugId: ''})
    }
    
    render() {
        const { isSearchField } = this.state;
        return (
            <React.Fragment>
                <div className="top-navabar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="left-section">
                                        <a href="https://www.cisco.com/" className="logo-area" target="_blank">
                                            <img src={logoCisco} alt="cisco"/>
                                        </a>
                                        <Link to="/" className="logo-area" >
                                            <span>Software X-Ray | Drew</span>
                                        </Link>
                                            
                                        
                                        {isSearchField && (
                                            <div className="input-group">
                                                <input type="text" className="form-control input-box-position" placeholder="Bug ID" aria-label="bugID" aria-describedby="basic-addon1"
                                                    value={this.state.bugId}
                                                    onChange={this.handleChange}
                                                    onKeyUp={(e) => this.searchData(e)}
                                                />
                                                {this.state.bugId && (
                                                    <i className="fa fa-times" onClick={this.resetField}></i>
                                                )}
                                                <ButtonToolbar>
                                                    {['bottom'].map(placement => (
                                                        <OverlayTrigger
                                                        key={placement}
                                                        placement={placement}
                                                        overlay={
                                                            <Tooltip id={`tooltip-${placement}`}>
                                                                Enter cdets bug id on search field
                                                            </Tooltip>
                                                        }
                                                        >
                                                        {/* <Button variant="secondary">Tooltip on {placement}</Button> */}
                                                            <i className="fa fa-info-circle"></i>
                                                        </OverlayTrigger>
                                                    ))}
                                                </ButtonToolbar>
                                            </div>
                                        )}
                                        

                                    </div>
                                    
                                    <div className="profile-section">
                                        <ButtonToolbar>
                                            {['bottom'].map(placement => (
                                                <OverlayTrigger
                                                    key={placement}
                                                    placement={placement}
                                                    overlay={
                                                        <Tooltip id={`tooltip-${placement}`}>
                                                            Go to help page
                                                        </Tooltip>
                                                    }
                                                    >
                                                    <Link to="/help">
                                                        <i className="fa fa-info-circle"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                            ))}
                                        </ButtonToolbar>
                                        <img src={`http://wwwin.cisco.com/dir/photo/zoom/${this.state.username ? this.state.username :'na'}.jpg`} className="image-style" />
                                        <span className="namespace">{this.state.displayUsername ? this.state.displayUsername : 'user Name'}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-style">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        
                                        <div className="input-group col-md-12">
                                            <input type="text" className="form-control input-box-position" placeholder="Bug ID" aria-label="bugID" aria-describedby="basic-addon1"
                                                value={this.state.bugId}
                                                onChange={this.handleChange}
                                                onKeyUp={(e) => this.searchData(e)}
                                            />
                                            <div className="input-group-prepend symbol-div-style">
                                                <span className="input-group-text symbol-span-style" id="basic-addon1">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="row name-row-style">
                                        <div className="col-md-12 text-right">
                                        <i className="fa fa-info-circle"></i>
                                            {/* <i className="fa fa-copy" style={{ padding: '10px' }}></i> */}
                                            <span><img src={`http://wwwin.cisco.com/dir/photo/zoom/${this.state.username}.jpg`} className="image-style" /></span><span className="namespace">{this.state.displayUserName ? this.state.displayUserName : 'user Name'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Navbar