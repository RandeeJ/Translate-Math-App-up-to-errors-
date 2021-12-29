import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import Default from "./languages/default";
import English from './languages/english';
import Spanish from "./languages/spanish";

// class Translation extends Component {

//     constructor(props){
//         super(props);

//         this.state = {
//             language: ""
//         }
//     }


//     render() {

export default function() {
        return (

            <div>
               
                   Show translation here
                    <Switch>
                        <Route exact path ="/" component={Default} />
                        <Route path="/english" component={English} />
                        <Route path="/spanish" component={Spanish} />

                    </Switch>

            </div>
        );
    }