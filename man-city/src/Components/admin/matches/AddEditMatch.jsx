import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';
import FormField from '../../ui/formFields';
import validate from '../../ui/misc';

class AddEditMatch extends Component {

    state = {
        matchId:'',
        formType:'',
        formError: false,
        formSuccess:'',
        teams:[],
        formdata:{
            date:{
                element:'input',
                value:'',
                config:{
                    label: 'Event date',
                    name:'date_input',
                    type: 'date'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            local:{
                element:'select',
                value:'',
                config:{
                    label: 'Select a local team',
                    name:'select_local',
                    type: 'select',
                    options: []
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: false
            },
            resultLocal:{
                element:'input',
                value:'',
                config:{
                    label: 'Result local',
                    name:'result_local_input',
                    type: 'text'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: false
            },
            away:{
                element:'select',
                value:'',
                config:{
                    label: 'Select a local team',
                    name:'select_local',
                    type: 'select',
                    options: []
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: false
            },
            resultAway:{
                element:'input',
                value:'',
                config:{
                    label: 'Result local',
                    name:'result_local_input',
                    type: 'text'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: false
            },
            referee:{
                element:'input',
                value:'',
                config:{
                    label: 'Referee',
                    name:'referee_input',
                    type: 'text'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            stadium:{
                element:'input',
                value:'',
                config:{
                    label: 'Stadium',
                    name:'stadium_input',
                    type: 'text'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            result:{
                element:'select',
                value:'',
                config:{
                    label: 'Team result',
                    name:'select_result',
                    type: 'select',
                    options: [
                        {key:'W',value:'W'},
                        {key:'L',value:'L'},
                        {key:'D',value:'D'},
                        {key:'n/a',value:'n/a'}
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            final:{
                element:'select',
                value:'',
                config:{
                    label: 'Game played ?',
                    name:'select_played',
                    type: 'select',
                    options: [
                        {key:'Yes',value:'Yes'},
                        {key:'No',value:'No'}
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
        }
    }

    render() { 
        return ( 
            <div>
                <AdminLayout>
                    <div className='editmatch_dialog_wrapper'>
                        <h2>
                            {this.state.formType}
                        </h2>
                        <div>
                            <form onSubmit={(event) => this.submitForm(event)}>
                            <FormField
                                id={'sate'}
                                formdata={this.state.formdata.date}
                                change={(element) => this.updateForm(element)}
                            />
                            
                            </form>
                        </div>
                    </div>
                </AdminLayout>
            </div>
         );
    }
}
 
export default AddEditMatch;