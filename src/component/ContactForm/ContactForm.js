import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsAction';
import Button from '../Button/Button';
import s from './ContactForm.module.css';

function ContactForm({ toggleModall }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const add = (name, number) => dispatch(addContact(name, number));

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

    const contactСomparison = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (contactСomparison) {
      alert(`${name} is already in contacts`);
    } else {
      add(name, number);
      setName('');
      setNumber('');
      toggleModall();
    }
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
