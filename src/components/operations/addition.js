import React from 'react';
import Numbers from '../Numbers2';
import { useState } from 'react';



    const Addition = props => {
        // const [valueOne, valueTwo] = useState(0)
        const valueOne = props.valueOne;
        const valueTwo = props.valueTwo;
        const valueTotal = valueOne + valueTwo;

        const addition = () => {
            valueOne + valueTwo;
        } 

        return (
            <div>
                <h1>{valueOne} + {valueTwo} = {valueTotal}</h1>
            </div>
            );
    }

export default Addition;



// WATCH: https://bottega.devcamp.com/pt-full-stack-development-javascript-python-react/guide/deep-dive-props-state-this-part-2

// i want to put each operation into its own component
// i want to setup props to take the input arguments and output the calculations

