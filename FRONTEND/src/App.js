import React,{useState, useCallback} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './users/pages/Users.js'
import NewPlace from './places/pages/NewPlace.js'
import MainNavigation from './shared/components/Navigation/MainNavigation.js';
import UserPlaces from './places/pages/UserPlaces.js';
import UpdatePlace from './places/pages/UpdatePlace.js';
import Authenticate from './users/pages/Authenticate.js';
import { AuthContext } from './shared/context/auth-context.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(()=>{
    setIsLoggedIn(true);
  },[]);
   const logout = useCallback(()=>{
    setIsLoggedIn(false);
  },[]);

  let routes;
  if(isLoggedIn){
    routes =(
      <Switch>
        <Route path="/" exact>
        <Users/>
        </Route>
        <Route path="/places/new">
        <NewPlace/>
        </Route>
        <Route path="/:userId/places" exact>
        <UserPlaces/>
        </Route>
        <Route path="/places/:placeId" exact>
        <UpdatePlace/>
  </Route>
   <Redirect to = "/"/>
      </Switch>
    );
  }
  else {
    routes =(
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
         <Route path="/:userId/places" exact>
        <UserPlaces/>
        </Route>
        <Route path='/auth' exact>
       <Authenticate/>
      </Route>
      <Redirect to = "/auth"/>
      </Switch>
    )
  }

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:login, logout: logout}}>
    <Router>
      <MainNavigation/>
      <main>
      {routes}
  </main>
    </Router>
    </AuthContext.Provider>
  );
};

export default App;
