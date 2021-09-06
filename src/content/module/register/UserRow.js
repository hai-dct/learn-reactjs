import React, { Component } from 'react';
import closeImg from '../../../img/ic_close.jpg';

class UserRow extends Component {

    constructor(props) {
        super(props);
        this.user = props.data
    }

    removeItem(id) {
        this.props.remove(id)
    }

    render() {
        return (
            <tr>
                <td>{this.user.id}</td>
                <td>{this.user.email}</td>
                <td>{this.user.skill}</td>
                <td>{this.user.gender == 0 ? "Male" : "Female"}</td>
                <td>{this.user.info}</td>
                <td>{this.user.checkbox ? "True" : "False"}</td>
                <td>                    
                    <button onClick={() => this.removeItem(this.user.id)}>
                        <img src={closeImg} alt="closeImg" className="close-img" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserRow;
