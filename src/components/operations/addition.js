import React, { Component } from 'react';


class Addition extends Component {

    constructor(props){
        super(props);

    }

addValues = () => {
    const {valueOne, valueTwo } = this.props;
    const valueSum = valueOne + valueTwo;
    console.log("addValues ", valueOne)
    console.log("addValues ",  valueTwo)
    console.log("addValues function", valueSum)
    
}

render() {

    const {valueOne, valueTwo } = this.props;
    const valueSum = valueOne + valueTwo;



    return(
        <div>
            <button className="additionBtn" onClick={() => {this.addValues()}}>
                Addition
            </button>

            <h1>
                {valueOne} + {valueTwo} = {valueSum}
            </h1>

        </div>
        )
    }
}


export default Addition;

