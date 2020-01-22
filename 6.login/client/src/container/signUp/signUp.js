import  React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from '../Auth/Auth.css';
import axios from 'axios'


class Auth extends Component {
    state = {
        controls: {

            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your First Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your Last Name'
                },
                value: '',
                validation: {
                    required: true,
    
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true,
        status:null,
        message:false
    }

    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }

    submitHandler = ( event ) => {
        event.preventDefault();
       // console.log(this.state.controls.firstName.value);
        
        
        axios.post('http://localhost:3003/register',{

            firstName: this.state.controls.firstName.value,
            lastName: this.state.controls.lastName.value,
            email: this.state.controls.email.value,
            password: this.state.controls.password.value

        }).then(res=>{
            console.log(res.status);
            
            if(res.status===200 && this.state.valid === true){
                this.props.history.replace('/');
                this.setState({status:res.status})
                
            }
            else if(res.status===200 && this.state.valid === false)
            {
                this.setState({message:true})
                console.log(this.state.message);
                
            }
            else if(res.status !==200 ){
                this.setState({message:res.status})

            }

            
            else{
                console.log(res.status);
                this.setState({status:res.status})
            }     
        }
        );


    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    loginHandler = ()=>{
        
    }

    render () {
        
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        

        let errorMessgae=null;
        if(this.props.error){
        errorMessgae=(<p>{this.props.error.message}</p>)
        }
         
        
        
        

        return (
            <div className={classes.Auth}>
                {errorMessgae}
                <form onSubmit = {this.submitHandler} >
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                {this.state.message}
            </div>
        );
    }
}
export default  Auth ;