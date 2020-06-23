import React ,{ Component }from "react";
import { FaCloud, FaNodeJs , FaBox } from "react-icons/fa";

const ServiceList = [
    {
        icon: <FaBox />,
        title: 'Certified IBM Cloud Pak for Automation Developer',
        description: 'Specialist in business rules and content analytics',
        badgeUrl: 'https://www.youracclaim.com/badges/3bfaecd7-1372-423d-b55b-95bdf756fb3a'
    },
    {
        icon: <FaNodeJs />,
        title: 'Experienced NodeJs Developer',
        description: 'API and React development with NodeJs',
        badgeUrl: 'https://www.youracclaim.com/users/nigel-crowther/badges'
    },
    {
        icon: <FaCloud />,
        title: 'IBM Cloud Developer',
        description: 'Experience in building solutions on IBM Cloud.  Cloudant, DB2, APIConnect',
        badgeUrl: 'https://www.youracclaim.com/users/nigel-crowther/badges'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.badgeUrl}>
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
export default ServiceThree;
