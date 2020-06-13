import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import SkillsList from "../elements/skills/SkillsList";

const CVLanding = () => {
    let title = 'CV - Nigel Crowther',
        description = 'Over twelve years designing and developing Cloud Pak for Automation systems within IBM. Experience across all business sectors with greatest focus on finance. I am a published author on DeveloperWorks and IBM Redbooks. I have presented at Think 2017 and other international conferences. ';
    return (
        <div className="active-dark">
            <Helmet pageTitle="Portfolio Landing" />

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/images/about/mugshot.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End About Area */}

            {/* Start Skills Area  */}
            <div id="skills" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">Skills</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <SkillsList item="3" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Skills Area  */}

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">Projects</h2>
                                        <p>My selection of projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Contact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/images/about/mugshot.jpg" contactTitle="Contact" contactUrl="https://www.linkedin.com/in/nigel-crowther-4560711/"/>
                </div>
            </div>
            {/* End Contact Area */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

        </div>
    )
}

export default CVLanding;
