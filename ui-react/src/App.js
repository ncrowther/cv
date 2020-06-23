import React, { Component } from 'react';
import './index.scss';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import CVLanding from './elements/CVLanding';
import PortfolioDetails from "./elements/portfolio/PortfolioDetails";
import error404 from "./elements/error404";

var posts = [
  {_id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {_id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {

  const content = props.posts.map((post) =>
    <div key={post._id}>
      <h3>{post.title}</h3>
    </div>
  );
  return (
    <div>
      <hr />
      {content}
    </div>
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {docs: []};
  }

  componentDidMount() {
    console.log("componentDidMount:")
    this.callApi()
      .then(res =>  this.setState({ docs: res.response }))
      .catch(err =>this.setState({ docs: err}));
  }

  callApi = async () => {
    console.log("Load:")
    const response = await fetch('/api/load');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    console.log("Response:" + body)
    return body;
  };

  render(){
      return(
          <BrowserRouter basename={'/'}>

                <Blog posts={this.state.docs} />,

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
