import React, {Component} from "react";
import Calculation from "./calculation";

class Calculator extends Component {
    constructor(props){
        super(props);

            }


    render () {
        
        const {valueOne, valueTwo} = this.props;
        console.log("calculator component", valueOne, valueTwo)

        return (
            <div>

          <h2>
              Your numbers are {valueOne} and {valueTwo}!
          </h2>



            <h1>
                <Calculation valueOne={valueOne} valueTwo={valueTwo}/>
            </h1>

          </div>
        )

        
    }

    
}



export default Calculator
