import React, { Component } from 'react';
import n2words from 'n2words';


export default class English extends Component {
    constructor(){
        super();

        this.state={
            languageTitle: "English"
        }
    }

componentDidMount() {
}

    render() {

        var n2words = require('n2words');

        const one = n2words(123);
        const two = n2words(123, {lang: 'en'}) ;
        
        const { languageTitle } = this.state;

        return (
            <div>
                <h2>{languageTitle} translation</h2>

                <div>
                {one}
                </div>

                <div>
                {two}
                </div>
            </div>
        );
    }
}