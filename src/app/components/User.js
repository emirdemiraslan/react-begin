import React from "react";
import {Route, Link} from "react-router-dom";
export class User extends React.Component {


    constructor(props) {
        super(props);

    }
    render() {
        let matched = this.props.match;
        return (
            <div>
                <li><Link to={`${matched.url}/45`}>45</Link></li>
                <h3>The User Page</h3>
                <p>User ID: {this.props.match.params.id}</p>
                <h4>User:{console.log(matched.path)}
                    <Route path={`${matched.path}/:id`} render={(m) => (<span>{m.match.params.id}</span>)}/>
                </h4>
            </div>
        );
    }
}
