import React from "react";
import {Header} from "./Header";

import {Link, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {User} from "./User";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">

                        <Switch>
                            <Route exact path="/" component={Home} />æ
                            <Route path="/user" component={User}/>
                        </Switch>

                    </div>
                </div>
            </div>
        );
    }
}