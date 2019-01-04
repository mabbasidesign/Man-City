import React, { Component } from 'react';
import Fade from 'react-reveal';
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

class Enroll extends Component {
    state = {
        formError:false,
        formSuccess:'',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            }
        }
    }


    submitForm = () => {

    }


    // updateForm = (element) => {
    //     console.log(element);
    //     const newFormData = {...this.state.formdata}
    //     const newElement = {...newFormData[element.id]}

    //     newElement.value = element.event.target.value;
    //     newFormData[element.id] = newElement;

    //     state: element.target.id = event.target.value;
    //     state: e.target.id = e.target.value;

    //     this.setState = ({
    //         formdata: newFormData
    //     })
    // }


    // updateForm = (element) => {
    //     const newFormData = {...this.state.formdata}
    //     const newElement = {...newFormData[element.id]}

    //     newElement.value = element.event.target.value;
    //     newFormData[element.id] = newElement;

    //      this.setState = ({
    //         formdata: newFormData
    //     })
    // }


    updateForm(element){
        const newFormdata = {...this.state.formdata}
        const newElement = { ...newFormdata[element.id]}

        let valiDate = validate(newElement);
        // console.log(valiDate);
        //validation
        newElement.valiid = validate[0];
        newElement.validationMessage = valiDate[1];

        newElement.value = element.event.target.value;
        newFormdata[element.id] = newElement;

        console.log(newFormdata);

        this.setState({
            formdata: newFormdata
        })
    }

    // updateForm = (element) =>{
    //     console.log(element);
    // }


    render() { 
        return ( 
            <Fade>
                <div className='enroll_wrapper'>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className='enroll_title'>
                            Enter your email
                        </div>
                        <div className='enroll_input'>
                            <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            // change={(element) => this.updateForm(element)}
                            change={(element) => this.updateForm(element)}
                            />
                        </div>
                    </form>
                </div>
            </Fade>
         );
    }
}

export default Enroll;