import React, { Component } from "react";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="Phone">Phone: <a href="tel:+44 (0)7879 613604">+44 (0)7879 613604</a> </p>
                                <p className="Email">Email:  <a href="mailto:ncrowther@uk.ibm.com"> ncrowther@uk.ibm.com</a> </p>
                                <p className="LinkedIn">LinkedIn: <a href={`${this.props.contactUrl}`}> {this.props.contactUrl}</a>  </p>
                            </div>

                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.contactImages}`} alt="me"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;
