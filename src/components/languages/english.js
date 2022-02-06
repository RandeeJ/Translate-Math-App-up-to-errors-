import React, { Component } from 'react';
import n2words from 'n2words';



class English extends Component {
    constructor(props){
        super(props);

        this.state={
            languageTitle: "English",
            // operation: {
            //     addition
            }
        }
    

    // you are trying to get the languages to work - right now the numbers work, but not the answers...
    // answers ... only if language is made a child component of the operation files also....
    // you are trying to get the operations to show in the translation, or if you can find out how to get the words for each language that passes into a variable - maybe this is a place where bind comes into play! bind can allow you to use certain variables based on what is called... and then you would need to link those to a button...the button for the language - USE STATE - DYNAMIC REDUCER VIDEO

    // redux - can share state with many files - creates redux store 

    // https://michaelnthiessen.com/passing-data-between-child-components
    // https://www.pluralsight.com/guides/how-to-pass-data-between-react-components
    

    render() {

        var n2words = require('n2words');

        const {valueOne, valueTwo,
            // valueAnswer
        } = this.props;


        const englishOne = n2words(valueOne, {lang: 'en'});
        const englishTwo = n2words(valueTwo, {lang: 'en'});
        // const englishAnswer = n2words(valueAnswer, {lang: 'en'});
        
        // LOOK INTO REPLACE FUNCTION TO SUBSTITUTE NEGATIVE IN FOR MINUS
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        // https://www.w3schools.com/jsref/jsref_replace.asp
        
        const { languageTitle
            // operation 
        } = this.state;

        console.log("english component", valueOne, 
        // valueAnswer
        )

        return (
            <div>
                <h2>{languageTitle} translation</h2>

                <div>
                {englishOne}
                </div> 

                {/* {operation}  */}

                <div>
                {englishTwo}
                </div>
                
                <div>
                {/* {englishAnswer} */}
                </div>



            </div>
        );
    }
}

export default English;