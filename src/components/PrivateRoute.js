import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

    const user = useContext(AuthContext);
    console.log('hello')
    return(
        <Route
        
            {...rest}
            render={routeProps =>
            !!user ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to={"/"} />
            )
            }

        />
    )

}

export default PrivateRoute;