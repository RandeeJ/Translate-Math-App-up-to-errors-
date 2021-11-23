import React, { Component } from 'react';
// import n2words from 'n2words';

 

export default class Language extends Component {


    render() {

        

        return (
            <div>
                <p>
          Select language here
                </p>

                <button className="englishBtn" 
                // onClick = {French()} 
                type="submit">
                    English
                </button>


                <button className="frenchBtn" 
                // onClick = {French()} 
                type="submit">
                    French
                </button>
                
                <button className="spanishBtn" 
                // onClick = {Spanish()} 
                type="submit">
                    Spanish
                </button>

        
            </div>
        )
    }};

