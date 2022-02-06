import React, { Component } from 'react';
import {connect} from "react-redux";


class Addition extends Component {

        state ={
            name: "operation",
            valueAnswer : ""
        };
    
    
    render() {
        const valueAnswer = this.props.valueOne + this.props.valueTwo;
            return(
                <div>
                    {this.props.valueOne} + {this.props.valueTwo} = {valueAnswer}
                </div>
            )
    }
}


const mapStateToProps = (state) => {
    return{
        valueOne: state.valueOne,
        valueTwo: state.valueTwo,
      }
}

export default connect(mapStateToProps)(Addition);