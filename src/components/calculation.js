import React, { Component } from 'react';
import Addition from './operations/addition';
import Numbers from './Numbers2';

// import Subtraction from './operations/subtraction';
// import Multiplication from './operations/multiplication';



class Calculation extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }



    // PUT FUNCTIONS OUTSIDE THE RENDER 
    // receive 2 arguments and return a string
          
addValues () {
    this.setState({

    })
}


    render() {
             
        const valueOne = this.state.valueOne;
        const valueTwo = this.state.valueTwo;

        return (
            <div>

                <Numbers/>

                <div className="select-operation-container">
                    <button className="additionBtn" onClick={() => {this.addValues()}}>
                        Addition
                    </button>
                </div>
                <Addition valueOne={valueOne} valueTwo ={valueTwo} />
            </div>
        );
    }}




export default Calculation

