import React from 'react';
import './PlaceForm.css';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {useForm} from '../../shared/hooks/form-hook';

const NewPlace =() => {
  const [formState, inputHandler] = useForm({
            title: {
             value:'', isValid: false},

             description: {
             value:'', isValid: false},

             address: {
             value:'', isValid: false}
            
            },false)

   


    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);// Send this to backend- TODO
    }


 

    return <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input id="title" element="input" type="text" label="Title" errorText="Please enter a valid title" onInput={inputHandler} validators = {[VALIDATOR_REQUIRE()]}/>
         <Input id="description" element="textarea" type="text" label="Description" errorText="Please enter a valid description of length(5) " onInput={inputHandler} validators = {[VALIDATOR_MINLENGTH(5)]}/>
        <Input id="address" element="input" type="text" label="Address" errorText="Please enter a valid address" onInput={inputHandler} validators = {[VALIDATOR_REQUIRE()]}/>
        
         <Button type="submit" disabled= {!formState.isValid}>Submit</Button>
    </form>;
}

export default NewPlace;