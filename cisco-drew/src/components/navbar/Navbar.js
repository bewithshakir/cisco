import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    state = { bugId: '', username: '', displayUserName: '' }
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
    render() {
        return (
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
                                        {/* <i className="fa fa-bell"></i>
                                        <i className="fa fa-copy" style={{ padding: '10px' }}></i> */}
                                        <span><img src={`http://wwwin.cisco.com/dir/photo/zoom/${this.state.username}.jpg`} className="image-style" /></span><span className="namespace">{this.state.displayUserName ? this.state.displayUserName : 'user Name'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar