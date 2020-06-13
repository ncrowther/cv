import React, { Component } from "react";

const PortfolioListContent = [
    {
        imageName: 'bluelightcard',
        image: '/images/client/bluelightcard.jpg',
        jobrole: 'Cloud Pak for Automation Development',
        date: 'May 2020',
        details: 'Worked with PreSales to build a POC for Blue Light Cards. I was responsible for building a Cloud based solution integrating a number of technologies including ODM, BACA, NodeJS, Cloudant and App ID.',
        company: 'Blue Light Card'
    },
    {
        imageName: 'hsbc',
        image: '/images/client/hsbc.jpg',
        jobrole: 'ODM Solution Architect',
        date: 'Sep-March 2020',
        details: 'Solution architect for calculating preferential business rates using ODM',
        company: 'HSBC'
    },
    {
        imageName: 'vm',
        image: '/images/client/vm.jpg',
        jobrole: 'APIC and NodeJs developer',
        date: 'Jan-Aug 2019',
        details: 'APIC and NodeJs design and development for Virgin Money Open Banking API',
        company: 'Virgin Money'
    },
    {
        imageName: 'engie',
        image: '/images/client/engie.jpg',
        jobrole: 'ODM and IBM Cloud solution architect',
        date: 'Jan-Sep 2018',
        details: 'Architect and technical lead for the Paymech solution for Engie.  Engie is a leading energy and services company.  I designed a solution to move from on-prem to a hybrid cloud solution.  Technologies included Maximo, NodeJS,  Cloudant, and ODM.  The first phase of the project went live in June 2018',
        company: 'Engie'
    },
    {
        imageName: 'db',
        image: '/images/client/db.jpg',
        jobrole: 'ODM and IBM Cloud solution architect',
        date: '2015-2016',
        details: 'Deutsche Bank ODM/DSI Architect. Lead the design and implementation of the ODM Rules and DSI components of DbBeam. DbBeam is Deutsche`s worldwide exception management platform combining IBM`s entire smarter process suite (BPM, BAM, ODM, DSI). On the back of this experience, I created a DeveloperWorks article on DSI Hot Entities and how to solve them',
        company: 'Deutsche Bank'
    },
    {
        imageName: 'worldpay',
        image: '/images/client/worldpay.jpg',
        jobrole: 'ODM solution architect',
        date: '2014',
        details: 'Designed Worldpay`s card scheme interchange rules which included schemes for Visa Europe and Mastercard.',
        company: 'Worldpay'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment>
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.imageName}`}></div>
                                <div className={`bg-blr-image`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={`/portfolio-details?company=${value.company}&date=${value.date}&jobrole=${value.jobrole}&details=${value.details}&image=${value.image}`}>{value.company}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </React.Fragment>
        )
    }
}
export default PortfolioList;
