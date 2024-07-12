import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)}>DELETE</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
