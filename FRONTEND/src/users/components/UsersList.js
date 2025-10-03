import React from 'react';
import './UsersList.css';
import UserItem from './UserItem.js'
import Card from '../../shared/components/UIElements/Card.js';


const UsersList = (props) =>{
    if(props.item.length === 0)
        return(<div className='center'>
           <Card> <h2>No users found</h2></Card>
        </div>)
    return(
        <ul className="users-list">
            {props.item.map(user =>
           (
            <UserItem
           key={user.id}
           id={user.id} 
           name={user.name}
           image={user.image}
           placeCount={user.places} />
           )
             
         

            )}
        </ul>
    )
}

export default UsersList;