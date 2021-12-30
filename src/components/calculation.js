import React, { Component } from 'react';
import { useState } from "react";

import { reduxForm, Field } from "redux-form"
import {FormInput, FormButton} from "./formFields";


class Calculation extends Component {

    // constructor(props){
    //     super(props);


    //     this.state = {
    //         toggleText: false
    //     }
    // }


        
        

    render() {

        // const { handleSubmit } = this.props;
        
        const Addition = () => {
            const valOne = 2;
            const valTwo = 3;
            const Sum = valOne + valTwo;
            
            console.log("addition button", Sum)
            return(
                <div>
                {valOne} + {valTwo} = {Sum}
                </div>
            )
        }

             
        return (
            // <form onSubmit={handleSubmit}>

            <div>

                <div className="select-operation-container">
                    <Field
                        key={0}
                        className="additionBtn"
                        onClick={() => this.addition()}
                        type="button"
                        title="Addition"
                        name="addition-button"
                        component={FormButton}
                    />

                    <Field 
                        key={1}
                        className="showButton"
                        onClick={() => this.setState({toggleText: false})}
                        type="submit"
                        title="Show Calculation"
                        name = "show-calculation"
                        component = {FormButton}
                    />
                </div>

                <h2> <Addition/> </h2>


               
            
                   


                </div>



               
            //    </form>

        );
    }}

Calculation = reduxForm({
     form: "Calculation"
 })(Calculation);



export default Calculation



















// ------------------

// import React, { Component } from 'react';

// import { reduxForm, Field } from "redux-form"
// import {FormInput, FormButton, LongGrayButton} from "../formFields";

// import history from "../../history";


// class AccountInformationForm extends Component {

//     constructor() {
//         super()

//         this.state ={
//             showPasswords: false
//         }
//     }
//     render() {
//         const { className, handleSubmit } = this.props;
        
//         return (
//             <form onSubmit={handleSubmit}
//                 className={`${className} account-information-form`}>

//                 <Field className="account-information-form__name"
//                 type="name"
//                 title="Name"
//                 placeholder="Name"
//                 name="name"
//                 component={FormInput}/>

//                 <Field className="account-information-form__email"
//                 type="email"
//                 title="Email"
//                 placeholder="Email"
//                 name="email"
//                 component={FormInput}/>


//                 <Field className="account-information-form__street-address"
//                 type="Address"
//                 title="Street Address"
//                 placeholder="Street Address"
//                 name="Address"
//                 component={FormInput}/> 

//                 <Field className="account-information-form__city"
//                 type="city"
//                 title="City"
//                 placeholder="City"
//                 name="city"
//                 component={FormInput}/> 

//                 <Field className="account-information-form__state"
//                 type="state"
//                 title="State"
//                 placeholder="State"
//                 name="state"
//                 component={FormInput}/> 

//                 <Field className="account-information-form__zipcode"
//                 type="zipcode"
//                 title="Zipcode"
//                 placeholder="Zipcode"
//                 name="zipcode"
//                 component={FormInput}/> 

//                 <div key={3} className="account-information-form__line"></div>

//                 {
//                 this.state.showPasswords ? 
//                 [
//                     <Field key={0} className="account-information-form__current"
//                         type="password"
//                         title="Current Password"
//                         placeholder="Current Password"
//                         name="current"
//                         component={FormInput}/>,
//                     <Field key={1} className="account-information-form__new"
//                         type="password"
//                         title="New Password"
//                         placeholder="New Password"
//                         name="new"
//                         component={FormInput}/>,
//                     <Field key={2} className="account-information-form__confirm"
//                         type="password"
//                         title="Confirm Password"
//                         placeholder="Confirm Password"
//                         name="confirm"
//                         component={FormInput}/>,
//                     <Field key={3} className="account-information-form__update-information"
//                         onClick ={() => this.setState({showPasswords: false})}
//                         type="submit"
//                         title="Update Information"
//                         name="update-information"
//                         component={FormButton}/>,
//                     <Field key={4} className="account-information-form__cancel"
//                         onClick ={() => this.setState({showPasswords: false})}
//                         type="button"
//                         title="Cancel"
//                         placeholder="cancel"
//                         name="cancel"
//                         short='true'
//                         // allows for styles noted with 'short' to override default styles from original login button
//                         component={FormButton}/> 
//                 ]
                
//                 :
//                 <Field className="account-information-form__change-password"
//                 onClick ={() => this.setState({showPasswords: true})}
//                 type="button"
//                 title="Change Password"
//                 labelTitle="Password"
//                 name="change-password"
//                 component={LongGrayButton}/> 
//                 }

//             </form>
//         );
//     }
// }



// AccountInformationForm = reduxForm({
//     form: "AccountInformationForm"
// })(AccountInformationForm);

// export default AccountInformationForm;

// // this is where the data goes, itll be the collection of data and then will go into 