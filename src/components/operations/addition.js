import React, { Component } from 'react';


class Addition extends Component {

    constructor(props){
        super(props);

        this.state ={
            name: "operation"
        };
    }
    
    render() {
        const {valueOne, valueTwo } = this.props;
        const valueAnswer = valueOne + valueTwo;
            return(
                <div>
                    {valueOne} + {valueTwo} = {valueAnswer}
                </div>
            )
    }
}


export default Addition;


// thinking about how to render the equation when the button is clicked
// componentdidmount - does that mean when the button is clicked that thats when everything will show?