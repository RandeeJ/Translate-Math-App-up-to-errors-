import React, { Component } from 'react';
import Addition from './operations/addition';

// import Subtraction from './operations/subtraction';
// import Multiplication from './operations/multiplication';



class Calculation extends Component {

    constructor(props){
        super(props);
       
        // this.state={
        //     valueOneCurrent:0,
        //     valueTwo:0
        // }
       
        // console.log(props.valueOne)

       // this.addValues=this.addValues.bind(this);
    }




    render() {
             
        const {valueOne, valueTwo } = this.props;

        


        return (
            <div>
                <div className="select-operation-container">
                   
                
                <Addition valueOne={valueOne} valueTwo ={valueTwo} /> 


                </div>


            </div>
        );

        
    }

    

}




export default Calculation

