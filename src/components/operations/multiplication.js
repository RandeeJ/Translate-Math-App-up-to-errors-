import React, { Component } from 'react';

export default class Multiplication extends Component {
    constructor(props){
        super(props);

        this.state ={
            name: "operation"
        };
    }
    render() {
        return (
            <div>
                multiplication
            </div>
        );
    }
}