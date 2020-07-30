import React, { Component } from "react";

class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}

function MessageTable(props) {
  if (props.messages === '') {    return null;  }
  return (
    <div className="messages">
      <h4>Messages</h4>
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    </div>
  );
}

class Contact extends Component{

  constructor(props) {
      super(props);
      this.state = {name: '', email: '', message: '', messages: ''};
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
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
      const response = await fetch('/api/writeComment/?name=' +  this.state.name + '&email=' + this.state.email  + '&message=' + this.state.message);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);

      console.log("Response:" + body)
      return body;
    };

    handleNameChange(event) {
       this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
       this.setState({email: event.target.value});
    }

    handleMessageChange(event) {
       this.setState({message: event.target.value});
    }

    handleSubmit(event) {

      event.preventDefault();
      // alert('A name was submitted: ' + this.state.value);

      this.writeMessageApi(this.state)
        .then(res =>  this.setState({message: res.response }))
        .catch(err =>this.setState({message: err.response }));

      this.readMessagesApi()
          .then(res =>  this.setState({messages: res.response }))
          .catch(err =>this.setState({messages: err.response }));
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

                            <div className="section-title text-left mb--50">
                              <form onSubmit={this.handleSubmit}>

                                    <h4>Your Name</h4>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>

                                    <h4>Your Email</h4>
                                    <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange}/>

                                    <h4>Your Message</h4>
                                    <textarea name="message" value={this.state.message} onChange={this.handleMessageChange} />

                                    <button className="rn-button-style--2 btn-solid" type="submit" value="Send" name="submit" id="mc-embedded-subscribe">Submit</button>
                              </form>
                            </div>

                            <MessageTable messages={this.state.messages} />

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;
