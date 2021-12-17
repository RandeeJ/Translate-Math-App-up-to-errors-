import React, { Component } from 'react';
import { useState } from "react";


class Calculation extends Component {

    constructor(props){
        super(props);


        this.state = {
            className: "display-calculation__show"
        }

        // this.toggleView = this.toggleView.bind(this);
    }


    toggleView = () => {
        const viewCalculation = document.getElementsByClassName("display-calculation__show");
        const className = this.state.className;
        
        this.setState({
            className: "display_calculation__hide" 
        }, () => console.log("Callback value", this.state.className))

        console.log(this.state.className)

    }



        addition = () => {
            const valOne = 2;
            const valTwo = 3;
            const Sum = valOne + valTwo;
            
            console.log("addition button", Sum)
        }
        

    render() {
        return (
            <div>
                <div className="select-operation-container">
                    <button
                        className="additionBtn"
                        onClick={() => 
                            this.addition()
                        }
                    >
                        Addition
                    </button>

                    <button
                        className="show"
                        onClick={() => 
                            this.toggleView()
                        }
                    >
                        Show
                    </button>
                </div>

                <div className='display-calculation-container'>
                    <div className={this.state.className} 
                    // style = {style}
                    >
                    values test
                    </div>
                </div>
            </div>
        );
    }}

export default Calculation