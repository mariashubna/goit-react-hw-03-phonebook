import css from './ContactsList.module.css';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            {contact.name}: {contact.number}
            <button className={css.btn} onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
