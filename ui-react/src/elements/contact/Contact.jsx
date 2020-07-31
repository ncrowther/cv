import React, { Component } from "react";

function MessageTable(props) {
  if (props.messages === null) {    return null;  }

  const listItems = props.messages.map((message) =>
           message.message !== null && message.message !== '' && <li> '{message.message}' - {message.name}</li>
      );

      return(
          <React.Fragment>
              <ul className={`list-style--1`}>
                  {listItems}
              </ul>
          </React.Fragment>
  )
}

class Contact extends Component{

  constructor(props){
      super(props);
      this.state = {
          rnName: '',
          rnEmail: '',
          rnSubject: '',
          rnMessage: '',
          rnMessages: null
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    readMessagesApi = async () => {
      console.log("Save comment:")
      const response = await fetch('/api/getComments');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);

      console.log("Response:" + body)
      return body;
    };

    writeMessageApi = async () => {
      console.log("Save comment:")
      const response = await fetch('/api/writeComment/?name=' +  this.state.rnName + '&email=' + this.state.rnEmail  + '&message=' + this.state.rnMessage);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);

      console.log("Response:" + body)
      return body;
    }

    handleSubmit(event) {

      event.preventDefault();
      // alert('A name was submitted: ' + this.state.value);

      this.writeMessageApi(this.state)
        .then(res =>  this.readMessagesApi()
                  .then(res =>  this.setState({rnMessages: res.response }))
                  .catch(err =>this.setState({rnMessages: err.response })))
        .catch(err =>this.setState({rnMessage: err.response }));

    }

    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">I am available. Connect with me via <a href="https://www.linkedin.com/in/nigel-crowther-4560711/">LinkedIn</a> or <a href="mailto:ncrowther@uk.ibm.com">email</a>, or post a message: </p>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                            <br/><br/>
                            <MessageTable messages={this.state.rnMessages} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;
