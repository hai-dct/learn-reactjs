import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

const Account = () => {
    const email = localStorage.getItem('authToken');
    const history = useHistory();

    const onLogout = (event) => {
        event.preventDefault();
        localStorage.setItem('authToken', '');
        history.push("/");
    }

    return (
        <Fragment>
            <div className="page">
                <h2>Account page</h2>
                <h3>Hello {email}</h3>
                <input type="submit" value="Logout" onClick={onLogout}/>
            </div>
        </Fragment>
    )
}


export default Account;