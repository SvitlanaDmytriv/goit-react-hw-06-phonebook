import { PersonXFill } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Button from '../Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsAction';

function ContactList() {
  const dispatch = useDispatch();
  const contactsAll = useSelector(state => state.contacts.items);
  const value = useSelector(state => state.contacts.filter);

  const deleteItem = id => dispatch(deleteContact(id));

  const filterContacts = () => {
    const normalizedFilter = value.toLowerCase();

    return contactsAll.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = filterContacts();

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={s.listItem}>
          <span className={s.contact}>{name} :</span>
          <span className={s.contact}>{number}</span>
          <Button
            className={s.button}
            type="button"
            onClick={() => deleteItem(id)}
          >
            <PersonXFill width="20" height="30" className={s.icon} />
          </Button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactsList: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;
