import React, { Component } from 'react';
import './TAC_reproducible.css'


class TacReproducible extends Component {
    state = { data: '' };
    componentDidMount() {
        this.setState({ data: this.props.bannerData })
    }
    render() {
        const { submitter } = this.state.data;
        return (
            <div className="tac-card-panel">
               <div className="table-heading">
                   TAC Reproducible Steps
                   <span style={{float: 'right', fontSize: '12px', marginTop: '4px'}}>{submitter}</span>
               </div>
               <div className="card-body">
                 <div className="banner-tac">
                 <div className="user" style={{backgroundImage:`url("../../../assets/imgs/small-banner.jpg")`,height:'100px'}}>
                     {/* <i className="fa fa-user-circle" style={{fontSize:'100px'}}></i> */}
                     <img className="usr-icon" src={`http://wwwin.cisco.com/dir/photo/zoom/${submitter}.jpg`} />
                 </div>
                 <div className="tac-msg">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
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