import React ,{ Component }from "react";
import { FaYoutube, FaBookOpen } from "react-icons/fa";

const PublicationListRow1 = [
    {
        icon: <FaBookOpen />,
        title: 'Building stateful decision services with ODM on Cloud',
        description: 'This article discusses three ways you can build stateful decision services with ODM',
        publicatationUrl: 'https://dmcommunity.org/2018/03/19/building-stateful-decision-services/'
    },
    {
        icon: <FaBookOpen />,
        title: 'Cool your hot entities in IBM ODM Decision Server Insights',
        description: 'Hot entity types Tips to avoid hot entities',
        publicatationUrl: 'https://www.ibm.com/developerworks/library/mw-1611-crowther-trs/1611-crowther.html'
    },
    {
        icon: <FaYoutube />,
        title: 'Governing Operational Decisions in an Enterprise Scalable Way',
        description: 'This IBM® Redbooks® publication introduces operational decision governance and describes in details how to implement it ',
        publicatationUrl: 'https://www.youtube.com/watch?v=F83LChb8GHM'
    }
  ]

    const PublicationListRow2 = [
    {
        icon: <FaBookOpen />,
        title: 'ODM and Big Data',
        description: 'Describes how the Generic Ruleset Signature pattern can be used to integrate IBM® Operational Decision Management with Apache™ Hadoop™ to execute business rules within a distributed computing solution.',
        publicatationUrl: 'https://www.ibm.com/developerworks/bpm/bpmjournal/1209_crowther/1209_crowther.html'
    },
    {
        icon: <FaBookOpen />,
        title: 'Think big! Scale your business rules solutions up to the world of big data',
        description: 'To scale business rules solutions up to the world of big data, consider using the Business Rules and the IBM® Analytics for Hadoop services',
        publicatationUrl: 'https://www.ibm.com/developerworks/bpm/library/techarticles/1411_crowther-bluemix/1411_crowther.html'
    },
    {
        icon: <FaBookOpen />,
        title: 'Advanced ODM Rule Governance',
        description: 'Advanced governance framework for ODM',
        publicatationUrl: 'https://www.ibm.com/developerworks/bpm/bpmjournal/1305_crowther/1305_crowther.html'
    }
]


class PublicationThree extends Component{
    render(){
        const {column } = this.props;
        const PublicationContent1 = PublicationListRow1.slice(0 , this.props.item);
        const PublicationContent2 = PublicationListRow2.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row">
                    {PublicationContent1.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.publicatationUrl}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="row">
                    {PublicationContent2.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.publicatationUrl}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default PublicationThree;
