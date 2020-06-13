import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import Project from "../../elements/project/Project";


class PortfolioDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        const query = new URLSearchParams(this.props.location.search)

        // When the URL is /the-path?some-key=a-value ...
        const company = query.get('company')
        const jobrole = query.get('jobrole')
        const date = query.get('date')
        const details = query.get('details')
        const image = query.get('image')

        return(

            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                {/* Start Project Area */}
                <div id="project" className="fix">
                    <div className="rn-contact-area ptb--120 bg_color--1">
                        <Project company={`${company}`} jobrole={`${jobrole}`} date={`${date}`} details={`${details}`} companyImage={`${image}`}/>
                    </div>
                </div>
                {/* End project Area */}


            </React.Fragment>
        )
    }
}
export default PortfolioDetails;
