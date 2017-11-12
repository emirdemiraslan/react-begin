import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
    };

    this.name = props.name;
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });

  }
  render() {

    return(
      <div>
        <p>In a new Component</p>
        <p>Hello {this.name}. you are {this.state.age} years old!</p>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me Older!</button>


      </div>
    );
  }
}

Home.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
}
