import React, { useEffect , useState} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Input from '../../shared/components/FormElements/Input'
import Button from "../../shared/components/FormElements/Button";
import PlaceForm from './PlaceForm.css';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MIN } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card";

const DUMMY_PLACES = [
    {
    id: 'p1',
    title: 'Empire State Building',
    description: 'Famous sky scrappers in the world',
    imageUrl:'https://c2.vgtstatic.com/thumbll/1/8/18-v3-xl/empire-state-building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
        lat:'40.7484405',
        lng:'-73.9856644'
    },
creator:'u1'},
 {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'Famous sky scrappers in the world',
    imageUrl:'https://c2.vgtstatic.com/thumbll/1/8/18-v3-xl/empire-state-building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
        lat:'40.7484405',
        lng:'-73.9856644'
    },
creator:'u2'}
]

const UpdatePlace = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;
   


     const [formState, inputHandler, setFormData] = useForm({
        title: {
            value:'',
            isValid: false
        },
        description: {
            value:'',
            isValid: false
        }
    }, false);
    const identifiesPlace = DUMMY_PLACES.find(p => p.id === placeId);
   
    useEffect(()=>{
         if(identifiesPlace){
        setFormData({
            title: {
            value:identifiesPlace.title,
            isValid: true
        },
        description: {
            value:identifiesPlace.description,
            isValid: true
        }
        }, true);
    }
        setIsLoading(false);
    },[setFormData,identifiesPlace])
    
    if(!identifiesPlace){
        return <div className="center">
            <Card>
            <h2>Could Not find the place!</h2>
            </Card>
        </div>
    }

    const placeUpdateSubmitHandler =event =>{
            event.preventDefault();
            console.log(formState.inputs);
    }
    
    if(isLoading){
        return <div className="center">
            <h2>Loading...</h2>
        </div>
    }
    return<form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input 
            id="title" 
            element="input" 
            type="text" 
            label="Title" 
            value={formState.inputs.title.value} 
            validators= {[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title" 
            onInput={inputHandler}
            valid={formState.inputs.title.isValid}/>

            <Input 
            id="description" 
            element="textarea" 
            type="text" 
            label="Description" 
            value={formState.inputs.description.value} 
            validators={[VALIDATOR_MINLENGTH(5)]} 
            errorText="Please enter a valid title" 
            onInput={inputHandler}
            valid={formState.inputs.description.isValid}/>
            <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
          </form>
};
export default UpdatePlace;