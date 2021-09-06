import React, { useState } from "react";
import closeImg from '../../../../img/ic_close.jpg';

function UserHookRow(props) {

    const { user } = props;

    function removeItem(id) {
        props.remove(id)
    }

    return <tr>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.skill}</td>
        <td>{user.gender == 0 ? "Male" : "Female"}</td>
        <td>{user.info}</td>
        <td>{user.checkbox ? "True" : "False"}</td>
        <td>
            <button onClick={() => removeItem(user.id)}>
                <img src={closeImg} alt="closeImg" className="close-img" />
            </button>
        </td>
    </tr>
}

export default UserHookRow;
