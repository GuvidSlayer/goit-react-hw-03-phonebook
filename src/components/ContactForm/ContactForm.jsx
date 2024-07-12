import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-all">
        <label>
          NAME
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-style"
          />
        </label>

        <label>
          NUMBER
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            className="form-style"
          />
        </label>

        <button type="submit">ADD NEW CONTACT</button>
      </form>
    );
  }
}

export default ContactForm;
