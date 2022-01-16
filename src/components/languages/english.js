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
    // you are trying to get the operations to show in the translation, or if you can find out how to get the words for each language that passes into a variable - maybe this is a place where bind comes into play! bind can allow you to use certain variables based on what is called... and then you would need to link those to a button...the button for the language
    // GOOD JOB YESTERDAY! feel free to do other work today... you did good.
    // or rather, 3 more videos!!

    render() {

        var n2words = require('n2words');

        const {valueOne, valueTwo,
            // valueAnswer
        } = this.props;

        const englishOne = n2words(valueOne, {lang: 'en'});
        const englishTwo = n2words(valueTwo, {lang: 'en'});
        // const englishAnswer = n2words(valueAnswer, {lang: 'en'})
        
        
        const { languageTitle, 
            // operation 
        } = this.state;

        console.log("english component", valueOne)

        return (
            <div>
                <h2>{languageTitle} translation</h2>

                <div>
                {englishOne} 
                {/* {operation}  */}
                {englishTwo} 
                {/* {englishAnswer} */}


                </div>
            </div>
        );
    }
}

export default English;