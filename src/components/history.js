import React, { Component } from 'react';
import axios from "axios";



class CalculationHistory extends Component {

    constructor(){
        super();
    
      }


      saveCalculation() {

        console.log(this.state.valueOne)

        // axios.post('http://127.0.0.1:5000/calculation')
        // .then(response => {
        //   // handle success
        //   console.log(response);
        // //   this.setState({
        //     // valueOne: response.data.valueOne,
        //     // valueTwo: response.data.valueTwo,
        //     // valueAnswer: response.data.valueAnswer
        // //   })
        // })
        // .catch(error => {
        //   // handle error
        //   console.log(error);
        // })
        // .then(() => {
        //   // always executed
        // });
      }

      getCalculations() {
        axios.get('http://127.0.0.1:5000/calculations')
        .then(response => {
          // handle success
          console.log(response);
          this.setState({
              valueOne: response.data.valueOne,
              valueTwo: response.data.valueTwo
          })
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
      }







      componentDidMount(){
          this.getCalculations();
      }


    render() {

        return (
            <div>

                <div className='save-calculation-container'>
                    <button className='save-calculation' 
                    type="submit"
                    onClick={this.saveCalculation()}
                    >
                    Save Calculation
                    </button>
                </div>

                <div className='calculation-history'>
                    <ul>
                        {/* {this.props.} */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CalculationHistory;