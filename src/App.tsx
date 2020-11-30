import React, { } from 'react';
import Login from "./pages/Login";
import { BrowserRouter, Switch} from "react-router-dom";
import RouteAuth from "./routes/Route";
import Dashboard from "./pages/Dashboard";

function App() {
  return( 
    //router for browser's
    <BrowserRouter> 
      <Switch>
        <RouteAuth path="/login" component={Login}  />
        <RouteAuth path="/dashboard" component={Dashboard} isPrivate />
      </Switch> 
    </BrowserRouter>
  )
}
export default App;
