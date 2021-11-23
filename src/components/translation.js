import React, { Component } from 'react';
import n2words from 'n2words';
import Calculation from './calculation';

export default class Translation extends Component {

    constructor(props){
        super(props);
    }

    // this.state.c

    render() {
       
        var n2words = require('n2words');

        const one = n2words(123);
        const two = n2words(123, {lang: 'en'}) ;
        const three = n2words(123, {lang: 'fr'}) ;
        const four = n2words(123, {lang: 'es'});

        return (

            
            <div>
               <p>
                   Show translation here

                   {/* {one}
                   {three} */}
                   </p>

            </div>
        );
    }
}


