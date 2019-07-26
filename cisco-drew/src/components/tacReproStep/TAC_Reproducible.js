import React, { Component } from 'react';
import './TAC_reproducible.css'


class TacReproducible extends Component {
    state = { data: '' };
    componentDidMount() {
        this.setState({ data: this.props.bannerData })
    }
    renderMsg(reproData) {
        if (Object.keys(reproData ? reproData : {}).length) {
            const repro_step = (reproData.err) ? reproData.err: reproData.repro_step
            return repro_step;
        }
    }
    render() {
        const { submitter } = this.state.data;
        const { reproStepsData } = this.props;

        return (
            <div className="tac-card-panel">
               <div className="table-heading">
                   TAC Reproducible Steps
                   <span style={{float: 'right', fontSize: '12px', marginTop: '4px'}}>{submitter ? submitter : 'No submitter'}</span>
               </div>
               <div className="card-body">
                 <div className="banner-tac">
                 <div className="user" style={{backgroundImage:`url("../../../assets/imgs/small-banner.jpg")`,height:'100px'}}>
                     {/* <i className="fa fa-user-circle" style={{fontSize:'100px'}}></i> */}
                     <img className="usr-icon" src={`http://wwwin.cisco.com/dir/photo/zoom/${submitter}.jpg`} />
                 </div>
                 <div className="tac-msg">
                    {/* {Object.keys(reproStepsData ? reproStepsData : {}).length && (
                        <React.Fragment>
                            {reproStepsData.repro_step ? reproStepsData.repro_step : reproStepsData.err}
                        </React.Fragment>
                    )} */}
                    {this.renderMsg(reproStepsData)}
                 </div>
                 <div className="card-footer">
                     <button className="btn btn-primary">Connect</button>
                 </div>
                 </div>
               </div>
               </div>
        )
    }

}
export default TacReproducible