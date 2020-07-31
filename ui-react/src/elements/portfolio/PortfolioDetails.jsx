import React, { Component } from "react";
import ModalVideo from 'react-modal-video';
import Helmet from "../../component/common/Helmet";
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

          <div className="active-dark">
              <Helmet pageTitle="Portfolio Landing" />
                    <div className="rn-contact-area ptb--120 bg_color--1">
                        <Project company={`${company}`} jobrole={`${jobrole}`} date={`${date}`} details={`${details}`} companyImage={`${image}`}/>
                    </div>


                    <div className="portfolio-thumb-inner">
                        <div className="thumb position-relative mb--30">
                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='F83LChb8GHM' onClose={() => this.setState({isOpen: false})} />
                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                        </div>

                        <div className="thumb mb--30">
                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                        </div>

                        <div className="thumb">
                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                        </div>
                    </div>

            </div>
        )
    }
}
export default PortfolioDetails;
