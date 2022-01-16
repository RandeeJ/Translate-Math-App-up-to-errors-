import React, { Component } from 'react';
import Addition from './operations/addition';
import Subtraction from "./operations/subtraction";
import Multiplication from './operations/multiplication';



class Calculation extends Component {

    constructor(props){
        super(props); 

        this.state = {
            name: "operation",
            showHideAddition: false,
            showHideMultiplication: false,
            showHideSubtraction: false
        }
        this.hideCalculation = this.hideCalculation.bind(this);
    }

hideCalculation(name){
    switch(name){
        case "showHideAddition":
            this.setState({
                showHideAddition: true,

                showHideMultiplication: false,
                showHideSubtraction: false
            });
            break;
        case "showHideMultiplication":
            this.setState({ 
                showHideMultiplication: true,

                showHideAddition: false,
                showHideSubtraction: false
            });
            break;
        case "showHideSubtraction":
            this.setState({ 
                showHideSubtraction: true,
                
                showHideAddition: false,
                showHideMultiplication: false
            });
            break;
        default:
            null;

    }
}

    

    

    render() {
        const {valueOne, valueTwo } = this.props;
        const {showHideAddition, showHideMultiplication, showHideSubtraction} = this.state
        
        return (

            <div className='calculation'>
                <div className='operation-buttons'>
                    <button className="operation-buttons__addition" onClick={() => {this.hideCalculation("showHideAddition")}}>
                        Addition
                    </button>
                    <button className='operation-buttons__subtraction' onClick={() => {this.hideCalculation("showHideSubtraction")}}>
                        Subtraction
                    </button>
                    <button className='operation-buttons__multiplication' onClick={() => {this.hideCalculation("showHideMultiplication")}}>
                        Multiplication
                    </button>

                </div>



            <div className = "calculation__view">
                {showHideAddition && <Addition className="calculation__view-addition" valueOne={valueOne} valueTwo={valueTwo}/>}
                {showHideSubtraction && <Subtraction className="calculation__view-subtraction" valueOne={valueOne} valueTwo={valueTwo}/>}
                {showHideMultiplication && <Multiplication className="calculation__view-multiplication" valueOne={valueOne} valueTwo={valueTwo}/>}
            </div>
            </div>
        );
    }
}

export default Calculation


