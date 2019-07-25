import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    state = { data: '' };
    componentDidMount() {
        this.setState({ data: this.props.bannerData })
    }

    render() {
        const { bug_id, cdets_link, headline, severity, submitter, to_be_fixed, version } = this.state.data;


        return (
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-md-3">
                        <span className="lbl-heading">Bug ID:</span><span className="lbl-text">{bug_id ? bug_id : 'N/A'}</span>
                    </div>
                    <div className="col-md-6">
                        <span className="lbl-heading">CDET Link:</span>
                        <span className="lbl-text">
                            <a style={{ color: '#FFF' }} href={cdets_link} target="_blank">{cdets_link}</a></span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">To be Fixed:</span><span className="lbl-text">{to_be_fixed}</span>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-3">
                        <span className="lbl-heading">Submitter:</span><span className="lbl-text">{submitter}</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Version:</span><span className="lbl-text">{version}</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Severity:</span><span className="lbl-text">{severity}</span>
                    </div>
                    <div className="col-md-3">
                        <span className="lbl-heading">Keywords:</span><span className="lbl-text">work port channel</span>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <span className="lbl-heading">Headline:</span><span className="lbl-text">{headline}</span>
                    </div>
                </div>
            </div>
        )

    }
}

export default Banner