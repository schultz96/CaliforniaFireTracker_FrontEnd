import  React from 'react';
import { 
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import { Users } from './Users/Users';
import { Reservations } from './Reservations/Reservations';

export const ManagementRouter = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/users`}>
        <Users/>
      </Route>
      <Route exact path={`${path}/reservations`}>
        <Reservations/>
      </Route>
    </Switch>  
  )
}