import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      homeMounted:true
    }
  }

  onGreet(name) {
    alert("Hello! " + name);
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink:newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted:!this.state.homeMounted
    });
  }

  render() {
    let homeComp ="";
    if(this.state.homeMounted) {
      homeComp= <Home
        name={"Emir"}
        initialAge={34}
        greet={this.onGreet}
        changeLink={this.onChangeLinkName.bind(this)}
        initialLink={this.state.homeLink}
      />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            {homeComp}
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
          </div>
        </div>
      </div>
    );
  }

}

render(<App/>,window.document.getElementById("app"));
