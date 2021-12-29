import React, { Component } from 'react';
import { Sum } from './calculation';
// import n2words from 'n2words';

import { NavLink } from "react-router-dom"

import Translation from './translation';
 

export default class Language extends Component {

    constructor(){
        super()

    this.state = {
        language: "",
        sum: Sum
        }
    }

    handleClick= () => {
        this.setState({language: this.state.language})
    }

    Spanish() {
        this.setState({language: "Spanish"})
        console.log(this.state.sum);
    }

    French() {
        this.setState({language: "French"})
        console.log(this.state.sum);
    }

    English() {
        this.setState({language: "English"})
        console.log(this.state.sum);
    }


    render() {

        

        return (
            <div>
                <p>
          Select language here
                </p>

                <div>
                <NavLink to="/english">
                <button className="EnglishBtn" 
                onClick = {() => {this.English()}} 
                type="submit"
                title="English">
                    English
                </button>
                </NavLink>
                </div>


                <div>
                <NavLink to="/french">
                <button className="FrenchBtn" 
                onClick = {() => {this.French()}} 
                type="submit"
                title="French">
                    French
                </button>
                </NavLink>
                </div>
                
                <div>
                <NavLink to="/spanish">
                <button className="spanishBtn" 
                onClick = {() => {this.Spanish()}} 
                type="submit"
                title="Spanish">
                    Spanish
                </button>
                </NavLink>
                </div>

        
            </div>
        )
    }};

