import React, { Component } from "react";

class Project extends Component{

    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h3 className="company">{this.props.company}</h3>
                                <h4 className="description">{this.props.jobrole}</h4>
                                <h5 className="date">{this.props.date}</h5>
                                <p className="description">{this.props.details}</p>
                            </div>

                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.companyImage}`} alt="companyImage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Project;
