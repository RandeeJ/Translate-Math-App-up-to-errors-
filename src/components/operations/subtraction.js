import React, { Component } from 'react';


class Subtraction extends Component {

    constructor(props){
        super(props);

        this.state ={
            name: "operation"
        };
    }
    
    render() {
        const {valueOne, valueTwo } = this.props;
        const valueAnswer = valueOne - valueTwo;
            return(
                <div>
                    {valueOne} - {valueTwo} = {valueAnswer}
                </div>
            )
    }
}


export default Subtraction;