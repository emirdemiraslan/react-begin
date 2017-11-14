import React from "react";
import {render} from "react-dom";
import {Router, Route} from "react-router";
import createBrowserHistory from 'history/createBrowserHistory';
const newHistory = createBrowserHistory();

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";



class App extends React.Component {

  render() {
    return (
     <Router history={newHistory}>
         <div>
             <Route exact path="/" component={Home} />
             <Route path="/" component={Root} />
             <Route path="/user" component={User} />
             <Route path="/home" component={Home}/>
         </div>

     </Router>
    );
  }

}

render(<App/>,window.document.getElementById("app"));
