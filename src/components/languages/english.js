import React, { Component } from 'react';
import n2words from 'n2words';


class English extends Component {
    constructor(props){
        super(props);

        this.state={
            languageTitle: "English",
            // operation: {
            //     addition: "+",
            //     subtraction: 
            // }
        }
    }

  // LOOK INTO REPLACE FUNCTION TO SUBSTITUTE NEGATIVE IN FOR MINUS
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        // https://www.w3schools.com/jsref/jsref_replace.asp

    render() {

        var n2words = require('n2words');

        const {valueOne, valueTwo,
            valueAnswer, operation
        } = this.props;

        const englishOne = n2words(valueOne, {lang: 'en'}).replace("minus", "negative");
        const englishTwo = n2words(valueTwo, {lang: 'en'}).replace("minus", "negative");
        const englishAnswer = n2words(valueAnswer, {lang: 'en'}).replace("minus", "negative");
        
        
        const { languageTitle, 
            // operation 
        } = this.state;

        console.log("english component", valueOne)

        return (
            <div>
                <h2>{languageTitle} translation</h2>

                <div>
                {englishOne} {operation} {englishTwo} = {englishAnswer}


                </div>
            </div>
        );
    }
}

    

export default English;