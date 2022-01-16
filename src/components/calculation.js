import React, { Component } from 'react';
import Addition from './operations/addition';

// import Subtraction from './operations/subtraction';
// import Multiplication from './operations/multiplication';



class Calculation extends Component {

    constructor(props){
        super(props); 

        this.state = {
            name: "operation",
            showHideAddition: false,
            showHideMultiplication: false
        }
        this.hideCalculation = this.hideCalculation.bind(this);
    }

hideCalculation(name){
    switch(name){
        case "showHideAddition":
            this.setState({ showHideAddition: true});
            break;
        case "showHideMultiplication":
            this.setState({ showHideMultiplication: !showHideMultiplication});
            break;
        default:
            null;

    }
}

    addValues = () => {
    
   
    }

    

    render() {
        const {valueOne, valueTwo } = this.props;
        const {showHideAddition, showHideMultiplication} = this.state
        
        return (

            <div className='calculation'>
                <div className='operation-buttons'>
                    <button className="operation-buttons__addition" onClick={() => {this.addValues(), this.hideCalculation("showHideAddition")}}>
                        Addition
                    </button>
                    <button className='operation-buttons__multiplication' onClick={() => {this.hideCalculation("showHideMultiplication")}}>
                        Multiplication
                    </button>
                </div>



            <div className = "calculation__view">
                {showHideAddition && <Addition className="calculation__view-addition" valueOne={valueOne} valueTwo={valueTwo}/>}
                {showHideMultiplication && <Multiplication />}
            </div>
            </div>
        );
    }
}

export default Calculation


