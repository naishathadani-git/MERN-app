import React from 'react';
import UsersList from '../components/UsersList.js'
import image1 from './Images/image1.jpg'

const Users = () => {
    const USERS = [{
        id:'u1', 
        name:"Naisha", 
        image:image1,
        places: 3}];

    return (
            <UsersList item={USERS}/> 
    )
}

export default Users;