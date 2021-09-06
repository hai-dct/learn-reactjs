import React, { Component } from 'react';
import UserRow from './UserRow.js';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        skill: '',
        gender: '0',
        info: ''
      },
      users: []
    };
    this.id = 0;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);
    this.id = this.id + 1;
    const user = { ...this.state.form, id: this.id };
    this.setState(prev => ({
      users: [
        ...prev.users,
        user
      ]
    }), () => {
      console.log(this.state);
    });
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prev => ({
      form: {
        ...prev.form,
        [name]: value
      }
    }));
  }

  handleRemove = (id) => {
    console.log(id);
    const { users } = this.state;
    const newUsers = users.filter(e => e.id != id);
    console.log(newUsers);
    this.setState(prev => ({
      users: newUsers
    }));
  }

  render() {
    const { form, users } = this.state;
    return (
      <div>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Skill</label>
            <select name="skill" onChange={this.handleChange}>
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
                  onChange={this.handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="1"
                  name="gender"
                  defaultChecked={form.gender === '1'}
                  onChange={this.handleChange}
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Accepted</label>
            <div className="radio-group">
              <label>
                <input type="checkbox" name="checkbox" onChange={this.handleChange} />
                Checkbox
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Other information</label>
            <textarea name="info" onChange={this.handleChange}></textarea>
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
                <UserRow key={e.id} data={e} remove={this.handleRemove} />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default RegisterForm;
