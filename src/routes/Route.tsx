import React from 'react';
import {
    Switch,
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}


const RouteAuth : React.FC<RouteProps> = ({component: Component, isPrivate = false, ...rest })=>{
    const hasToken = !!localStorage.getItem('token');

    return (
        <Switch>
            
            <ReactDOMRoute
                {...rest}
                render={({location})=> {
                return isPrivate === hasToken || !isPrivate ? (
                    <Component/>
                ) : (
                    <Redirect to={{
                        pathname: 'login',
                        state: { from: location },
                    }}/>
                )
            }
            }/>
        </Switch>
    )

}

export default RouteAuth;