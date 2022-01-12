import React, { Component } from 'react';
import Addition from './operations/addition';
import Number from './numbers';

// import Subtraction from './operations/subtraction';
// import Multiplication from './operations/multiplication';



class Calculation extends Component {

    // constructor(props){
    //     super(props);

    //     this.state = {

    //     }
    // }



    // PUT FUNCTIONS OUTSIDE THE RENDER 
    // receive 2 arguments and return a string
          

    render() {
             
        return (
            <div>

                <Number/>

                <div className="select-operation-container">
                    <button className="additionBtn">
                        Addition
                    </button>
                </div>
                <Addition valueOne={5} valueTwo ={19} />
            </div>
        );
    }}




export default Calculation

