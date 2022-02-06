import React, { Component } from 'react';
import Translation from '../translation';



class Multiplication extends Component {

    constructor(props){
        super(props);

        this.state ={
            name: "operation"
        };
    }
    
    render() {
        const {valueOne, valueTwo } = this.props;
        const valueAnswer = valueOne * valueTwo;
        const minus = " x ";
            return(
                <div>
                    {valueOne} * {valueTwo} = {valueAnswer}

                    <Translation valueOne = {valueOne} valueTwo = {valueTwo} valueAnswer={valueAnswer} operation={minus}/>

                </div>
            )
    }
}


export default Multiplication;