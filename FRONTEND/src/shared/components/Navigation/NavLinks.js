import React,{useContext} from "react";
import './NavLinks.css';
import { NavLink } from "react-router-dom";
import  {AuthContext} from '../../context/auth-context';

const NavLinks = props => {
    const context = useContext(AuthContext);
    return <ul className="nav-links">
        <li>
            <NavLink to="" exact>ALL USERS</NavLink>
        </li>
        {context.isLoggedIn &&(
        <li>
            <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
        )}
       
        {context.isLoggedIn && (
            <li>
            <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
        )}
        {!context.isLoggedIn && (
        <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
        )}
        {context.isLoggedIn && (<li><button onClick={context.logout}>LOGOUT</button></li>)}
       

    </ul>
};

export default NavLinks;