import { useState } from 'react';
import Button from '../Button/Button';
import s from './ContactForm.module.css';

function ContactForm({ addContact, toggleModall }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });
    setName('');
    setNumber('');
    toggleModall();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>Name </label>
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
        autoComplete="on"
      />

      <label className={s.label}>Number</label>
      <input
        className={s.input}
        type="tel"
        name="number"
        value={number}
        autoComplete="on"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChange}
      />

      <Button className={s.button} type="submit">
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;