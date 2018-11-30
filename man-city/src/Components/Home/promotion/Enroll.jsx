import React, { Component } from 'react';
import Fade from 'react-reveal';
import FormField from '../../ui/formFields';

class Enroll extends Component {
    state = { 
        formErrror: false,
        formSuccess: '',
        formdata: {
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email-input',
                    type: 'email',
                    placeholder: 'Enter Your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }


    submitForm = () => {

    }

    upfateForm = (element) => {
        console.log(element);
    }


    render() { 
        return ( 
            <Fade>
                <div className='enroll_wrapper'>
                    <form onSubmit={ (event) => this.submitForm(event) }>
                        <div className='enroll_title'>
                            Enter your email
                        </div>
                        <div className='enroll_input'>
                            <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element) => this.upfateForm(element)}
                            />
                        </div>
                    </form>
                </div>
            </Fade>
         );
    }
}

export default Enroll;