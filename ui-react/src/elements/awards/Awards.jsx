import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Job Roles",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Solution Architect</a>
                                                    Solution architect for Cloud Pak for Automation
                                                </li>
                                                <li>
                                                    <a href="/service">Consultancy</a>
                                                    Advise customers with best practices on IBM Cloud
                                                </li>
                                                <li>
                                                    <a href="/service">Software Development</a>
                                                    Experienced full stack developer
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">IBM Lab Services Award IBM Practice: Put the client first</a> 2019
                                               </li>
                                               <li>
                                                   <a href="/service">Eminence and Excellemce Award IBM Practice: Show personal interest</a> 2018
                                               </li>
                                               <li>
                                                   <a href="/service">IBM Lab Services Award: Restlessly reinvent</a> 2017
                                               </li>
                                               <li>
                                                   <a href="/service">IBM Lab Services Award</a> 2017
                                               </li>
                                               <li>
                                                   <a href="/service">IBM Rock Star</a> 2017
                                               </li>
                                               <li>
                                                   <a href="/service">Newbury Triathlon overall winner</a> 2009
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Cloud Pak for Automation and IBM Cloud Consultant<span> - IBM</span></a> 2008 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Senior Technical Consultant<span> - Siemens</span></a> 2006 - 2008
                                               </li>
                                               <li>
                                                   <a href="/service">Senior Technical Consultant<span> - ILOG </span></a> 2005 - 2006
                                               </li>
                                               <li>
                                                   <a href="/service">System Architect<span> - Viziqor </span></a> 2003 - 2005
                                               </li>
                                               <li>
                                                   <a href="/service">Team Leader<span> - Protek </span></a> 1999 - 2003
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Computer Science BSc 2(i)<span> - The University of Hertfordshire</span></a>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;
