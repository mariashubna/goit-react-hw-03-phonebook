import { Component } from 'react';
import { nanoid } from 'nanoid';
import ClientName from './ClientName/ClientName';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css'
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };
  handleFilterChange = filter => {
    this.setState({ filter });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ClientName
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterChange={this.handleFilterChange}
          deleteContact={this.deleteContact} 
        />
        <ContactsList contacts={this.filteredContacts()} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
