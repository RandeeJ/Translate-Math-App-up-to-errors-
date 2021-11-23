import IsConstructor from 'es-abstract/2015/IsConstructor';
import React, { Component } from 'react';

export default class Calculation extends Component {

    constructor(props){
        super(props);

        // this.onSubmit = this.onSubmit.bind(this);
 
        this.state = {
            valueOne: "",
            valueTwo: "",
            // ADDITIONAL FIELDS CREATED input from "addValueButton"

        }};


        // addValue(){
        //     // CREATES A NEW INPUT AND ADDS VALUE TO ARRAY
        // }

    render() {


        return (
            <div>
                {/* <p className="testinput">
                    Hello
                    </p> */}


                    <div className="select-operation-container">
                        <button className="additionBtn"
                        // onClick={addValues()}
                        >
                            Addition
                        </button>

                        <button className="multiplicationBtn"
                        // onClick={multiplyValues()}
                        >
                            Multiplication
                        </button>

                        <button className="subtractionBtn"
                        // onClick={subtractValues()}
                        >
                            Subtraction
                        </button>

                        {/* <button className="divisionBtn"
                        // onClick={addValues()}
                        >
                            Division
                        </button> */}
                        {/* HOW TO WORK WITH DIVIDING MORE THAN 2 NUMBERS
                        IS THERE A WAY TO LIMIT HOW MANY INPUTS ARE AVAILABLE WHEN THEY SELECT DIVISION
                        CONSIDER HAVING THEM CHOOSE AN OPERATION FIRST AND THEN THAT DETERMINES HOW MANY
                        INPUTS ARE ACCESSIBLE */}
                    </div>



                    <div className="value-input-container">
                    <input className="valueOne" 
                    type="number"
                    placeholder = "value one"
                    />

                    <input className="valueTwo" 
                    type="number"
                    placeholder = "value one"
                    />

                    <button className="addValueButton"
                    // onClick={addValue()}
                    >
                        Add another value
                    </button>
                    </div>

                    
                
            </div>
        );
    }
}