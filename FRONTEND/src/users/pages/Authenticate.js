import React,{useContext, useState} from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card'
import { AuthContext } from '../../shared/context/auth-context';
import './Authenticate.css';

const Authenticate = () =>{
    const context = useContext(AuthContext);

    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formState,inputHandler,setFormData] =  useForm({
        username:{value:'',isValid:false},
        email:{value:'', isValid:false}
    }, false);

    const authSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(formState.inputs);
        context.login();
    }

    const switchModeHandler = () => {
    if(!isLoginMode){
        setFormData(
            {
                ...formState.inputs,
                name: undefined
            },
            formState.inputs.email.isValid && formState.inputs.password.isValid);
        }else{
            setFormData({
                ...formState.inputs,
                name:{
                    value:'',
                    isValid : false
                }
            },false);
        }
    
    setIsLoginMode(prevMode => ! prevMode)
    };
return <Card className='authentication'>
    
<form className='place-form' onSubmit={authSubmitHandler}>
    <h2>Login Required</h2>
   {!isLoginMode && (
    <Input id="username" 
    label='UserName'
    element="input"
    placeholder="username" 
    type="username" 
    onInput ={inputHandler}
    errorText="Please enter valid username" 
    validators ={[VALIDATOR_REQUIRE]}/>
)}
    <Input id="email" 
    label='Email'
    element="input"
    placeholder="email" 
    type="email" 
    onInput ={inputHandler}
    errorText="Please enter valid email id" 
    validators ={[VALIDATOR_EMAIL()]}
    />
     <Input id="password" 
    label='Password'
    element="input"
    placeholder="password" 
    type="text" 
    onInput ={inputHandler}
    errorText="Please enter valid password, at least 5 chars" 
    validators ={[VALIDATOR_MINLENGTH(5)]}
    />
     <Button type="submit" disabled= {!formState.isValid}>{isLoginMode? 'LOGIN': 'SIGNUP'}</Button>
    
</form>
 <Button inverse onClick={switchModeHandler}> SWITCH TO {isLoginMode? 'SIGNUP':'LOGIN' }</Button>
</Card>
}
export default Authenticate;