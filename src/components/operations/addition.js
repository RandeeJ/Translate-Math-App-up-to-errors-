import React, { Component } from 'react';
import Translation from "../translation"


class Addition extends Component {

        state ={
            name: "operation",
            valueAnswer : ""
        };
    
    
    render() {
        const {valueOne, valueTwo } = this.props;
        const valueAnswer = valueOne + valueTwo;
        const plus = " + ";

            return(
                <div>
                    {valueOne} + {valueTwo} = {valueAnswer}
               
                <Translation valueOne = {valueOne} valueTwo = {valueTwo} valueAnswer = {valueAnswer} operation={plus}/>
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