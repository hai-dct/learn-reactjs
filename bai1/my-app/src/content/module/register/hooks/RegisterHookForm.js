import React, { useState } from "react";
import UserRow from './UserHookRow';

function RegisterHookForm() {

    const [form, setForm] = useState({
        email: '',
        password: '',
        country: '',
        gender: '',
        info: ''
    });
    const [users, setUser] = useState([]);
    const [id, setId] = useState(1);

    function handleSubmit (e) {
        e.preventDefault();

        setId(id + 1);
        const user = { ...form, id: id };
        setUser([...users, user]);
    }

    function handleChange (e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setForm({...form, [name]: value});
    }

    function handleRemove (id) {
        const newUsers = users.filter(e => e.id != id);
        setUser(newUsers);
    }

    return <div>
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Email address</label>
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Skill</label>
                <select name="skill" onChange={handleChange}>
                    <option value="">Please Choose</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                </select>
            </div>
            <div className="form-group">
                <label>Gender</label>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            value="0"
                            name="gender"
                            defaultChecked={form.gender === '0'}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="gender"
                            defaultChecked={form.gender === '1'}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label>Accepted</label>
                <div className="radio-group">
                    <label>
                        <input type="checkbox" name="checkbox" onChange={handleChange} />
                        Checkbox
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label>Other information</label>
                <textarea name="info" onChange={handleChange}></textarea>
            </div>
            <div className="buttons-set">
                <button className="btn">Submit</button>
            </div>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email Address</th>
                    <th>Skill</th>
                    <th>Gender</th>
                    <th>Info</th>
                    <th>Accepted</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(e => (
                        <UserRow key={e.id} user={e} remove={handleRemove} />
                    ))
                }
            </tbody>
        </table>
    </div>
}

export default RegisterHookForm;
