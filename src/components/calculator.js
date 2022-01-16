import React, {Component} from "react";
import Calculation from "./calculation";
// import { Form } from "redux-form";

class Calculator extends Component {
    constructor(props){
        super(props);

        this.state = {
            valueOne: "",
            valueTwo: ""
        }
        this.handleChange = this.handleChange.bind(this);
        
    }
// YOU CAN SET UP EACH INPUT TO HAVE ITS OWN HANDLE CHANGE FUNCTION...
// setValueOne = e =>  {
//     this.setState({ valueOne: e.target.value})
// }

// setValueTwo = e =>  {
//     this.setState({ valueTwo: e.target.value})
// }



// ... OR SET UP A HANDLE CHANGE FUNCTION THAT CAN BE USED BY ALL
// https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf
handleChange = ({ target }) => {
    this.setState({ [ target.name ] : target.value});
};




    render () {

        const valueOne = Number(this.state.valueOne);
        const valueTwo = Number(this.state.valueTwo);
        const { className } = this.props;

        // console.log (valueOne)

        return (
            <div className="userInput">
            <form className={`${className} number`}>
                <input type="number" 
                className="number__valueOne"
                placeholder="Your First Value"
                // IT WAS IMPORTANT TO SET THE NAME HERE SO THAT THIS.STATE AND TARGET COULD BE INTERACTED WITH
                name="valueOne"
                onChange={this.handleChange} 
                value = {valueOne}
                />
                <input type="number" 
                className="number__valueTwo"
                placeholder="Your Second Value"
                name= "valueTwo"
                onChange={this.handleChange}
                value = {valueTwo} 
                />
            </form>

          <h2>
              Your numbers are {valueOne} and {valueTwo}!
          </h2>





            <Calculation valueOne={valueOne} valueTwo={valueTwo}/>










        
          </div>
        )

        
    }

    
}



export default Calculator
//     const valueOne = props.valueOne;
//     const valueTwo = props.valueTwo;

//     //   this.handleChange = this.handleChange.bind(this);


// return (
//     <div className="numbers-input">
//     <label>
//         <input type="number"
//         className="valueOne"
//         // onChange={this.handleChange} 
//         />
//         <input type="number"
//         className="valueTwo"
//         // onChange={this.handleChange} 
//         />
//     </label>
//     </div>
//     )
// }

// export default Numbers