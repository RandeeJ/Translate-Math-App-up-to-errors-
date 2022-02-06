import React, {Component} from "react";
import { connect } from "react-redux";
import Calculation from "./calculation";

class Calculator extends Component {
    
    
    render () {
        
        console.log("calculator component", this.props.valueOne, this.props.valueTwo)

        return (
            <div>
                <h2>
                    Your numbers are {this.props.valueOne} and {this.props.valueTwo}!
                </h2>

                <h1>
                    <Calculation 
                    valueOne={this.props.valueOne} valueTwo={this.props.valueTwo}
                    />
                </h1>
          </div>
        )        
    }
}
    
const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
    return{
      valueOne: state.valueOne,
      valueTwo: state.valueTwo,
    //   valueAnswer: state.valueAnswer
    }
  }

export default connect(mapStateToProps)(Calculator);
