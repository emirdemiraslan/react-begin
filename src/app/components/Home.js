import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      homeLink: props.initialLink
    };

    this.name = props.name;
    console.log("Constructor");
  }

  componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Components will receive pros", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Should component update", nextProps, nextState);
    
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Component will Unmount");
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });

  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onChangeInputValue(e){
    //console.log(e.target.value);
    this.setState({
      homeLink:e.target.value
    });

    this.props.changeLink(this.state.homeLink);
  }

  render() {

    return(
      <div>
        <p>In a new Component</p>
        <p>Hello {this.name}. you are {this.state.age} years old!</p>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me Older!</button>
        <hr/>
        <button onClick= {() => this.props.greet(this.name)} className="btn btn-primary">Greet</button>
        <hr />
        <button onClick={this.onChangeLink.bind(this) } className="btn btn-primary">Change Link</button>
<hr/>
        <input type="text" value={this.state.homeLink} onChange={(event) => this.onChangeInputValue(event)}/>


      </div>
    );
  }
}

Home.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  greet:PropTypes.func,
  changeLink:PropTypes.func,
  initialLink:PropTypes.string
}
