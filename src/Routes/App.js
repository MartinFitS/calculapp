import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../containers/Home.js";
import Register from "../containers/Register";
import Login from "../containers/Login";
import Calculator from "../containers/Calculator";

const App = props => {
    const user = props.user;
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>
                {
                    user === undefined ? <Route exact path="/register" component={Register}></Route> : <Route exact path="/calculators" component={Calculator}></Route>
                }
                <Route exact path="/calculators" component={Calculator}></Route>
            </Switch>
        </BrowserRouter>
)};

const mapStateToProps = state => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, null)(App);