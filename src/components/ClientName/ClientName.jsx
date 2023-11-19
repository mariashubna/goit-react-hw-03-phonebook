import css from './ClientName.module.css'
import { Component } from 'react';
class ClientName extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const isContactExists = this.props.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase() 
    );

    if (isContactExists) {
      alert(`${name} is already in contacts`);
    } else {
      this.props.addContact(name, number);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
          Name:
          <input className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="[A-Za-z]{2,15} [A-Za-z]{2,15}"
            placeholder="Diana Klein"
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label className={css.label}>
          Number:
          <input className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="777-77-77"
            onChange={this.handleInputChange}
            required
          />
        </label>
        <button className={css.btn} type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ClientName;
