import React from 'react';
import {Route, Redirect} from "react-router-dom";

const PrivateRouter = ({component: Component}) => {
    return (
        <Route
            render = { () =>
                localStorage.getItem('authToken') ? (<Component/>) : (<Redirect to={{pathname: '/login'}}/>)
            }
        />
    )
}

export default PrivateRouter;