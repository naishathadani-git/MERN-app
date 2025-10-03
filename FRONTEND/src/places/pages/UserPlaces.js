import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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
const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place=> place.creator=== userId)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;