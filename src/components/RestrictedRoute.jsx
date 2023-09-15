

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

import { useAuth } from "hooks"
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
    const {isLoggedIn} = useAuth();
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;

}