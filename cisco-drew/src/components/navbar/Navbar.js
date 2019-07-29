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
        document.getElementById('search-field').addEventListener('keyup', (e)=> {
            const bugId = e.target.value;
            if (e.keyCode === 13) {
                this.props.handleSearch(bugId);
            }
        })
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
        const { metaData } = this.props;
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
                                                <input type="text" id="search-field" className="form-control input-box-position" placeholder="Enter CDETS bug id" aria-label="bugID" aria-describedby="basic-addon1"
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
                                                                Enter cdets bug id on search field and press enter
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
                                        <img src={`http://wwwin.cisco.com/dir/photo/zoom/${metaData && metaData.username ? metaData.username :'na'}.jpg`} className="image-style" />
                                        <span className="namespace">{metaData && metaData.displayUsername ? metaData.displayUsername : 'user Name'}</span>
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