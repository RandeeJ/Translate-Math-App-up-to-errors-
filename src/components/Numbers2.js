import React, {Component} from "react";
// import { Form } from "redux-form";

class Numbers extends Component {
    constructor(props){
        super(props);

        this.state = {
            valueOne: "",
            valueTwo: ""
        }
    }
    
// setValueOne = e =>  {
//     this.setState({ valueOne: e.target.value})
// }

// setValueTwo = e =>  {
//     this.setState({ valueTwo: e.target.value})
// }

handleChange = ({ target }) => {
    this.setState({ [ target.name ] : target.value});
};

    render () {
        const { className, valueOne, valueTwo } = this.props;
        return (
            <div className="userInput">
            <form className={`${className} numbers`}>
                <input type="number" 
                className="numbers__valueOne"
                name="valueOne"
                onChange={this.handleChange} 
                value = {this.state.valueOne}
                />
                <input type="number" 
                className="numbers__valueTwo"
                name= "valueTwo"
                onChange={this.handleChange}
                value = {this.state.valueTwo} 
                />
            </form>

          <h2>
              Your numbers are {this.state.valueOne} and {this.state.valueTwo}!
          </h2>
          </div>
        )
    }
}

export default Numbers
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