import React, { Component } from 'react';
import './index.scss';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import CVLanding from './elements/CVLanding';
import PortfolioDetails from "./elements/portfolio/PortfolioDetails";
import error404 from "./elements/error404";

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.response }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  // <h1>{this.state.response}</h1>
  render(){
      return(
          <BrowserRouter basename={'/'}>
              <Switch>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={CVLanding}/>

                  {/* Element Layout */}
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                  <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                  <Route component={error404}/>
              </Switch>
          </BrowserRouter>
      )
  }
}

// ReactDOM.render(<Root/>, document.getElementById('root'));
// serviceWorker.register();


export default App;
