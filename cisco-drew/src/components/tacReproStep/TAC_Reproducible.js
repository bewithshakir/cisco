import React, { Component } from 'react';
import './TAC_reproducible.css'

class TacReproducible extends Component {
    render() {
        return (
            <div className="tac-card-panel">
               <div className="table-heading">
                   TAC Reproducible Steps
                   <span style={{float:'right',fontSize:'12px',paddingTop:'5px'}}>vipikum3</span>
               </div>
               <div className="card-body" style={{padding:'0',height:'350px'}}>
                 <div className="banner-tac" style={{backgroundImage:`url("../../../assets/imgs/small-banner.jpg")`,width:'100%',height:'100px'}}>
                 <div className="user">
                     {/* <i className="fa fa-user-circle" style={{fontSize:'100px'}}></i> */}
                     <img className="usr-icon" src="../../../assets/imgs/user.png" />
                 </div>
                 <div className="tac-msg">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                 </div>
                 </div>
               </div>
               </div>
        )
    }

}
export default TacReproducible