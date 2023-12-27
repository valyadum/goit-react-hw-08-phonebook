import React, { useState } from 'react'
import css from './ContactForm.module.css';

const Form = ({ addContact, onClose, oldName = '', oldNumber = '' }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }
  function onAddContact(event) {
    event.preventDefault();
    const newContact = {
      name: name,
      number: number,
    };
    addContact(newContact);
    reset();
  }
  function reset() {
    setName('');
    setNumber('');
  }
  return (
    <form className={css.form} onSubmit={onAddContact}>
      <label className={css.label}>
        <input
          placeholder="Name"
          className={css.input}
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={css.label}>
        <input
          placeholder="Number"
          className={css.input}
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </label>
      <button type="submit" className={css.buttonSubmit} onClick={onClose}>
        Add contact
      </button>
    </form>
  );
};

export default Form