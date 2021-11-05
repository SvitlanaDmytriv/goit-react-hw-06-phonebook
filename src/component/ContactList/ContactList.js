import { PersonXFill } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Button from '../Button/Button';

function ContactList({ contactsList, deleteContact }) {
  return (
    <ul className={s.list}>
      {contactsList.map(({ name, number, id }) => (
        <li key={id} className={s.listItem}>
          <span className={s.contact}>{name} :</span>
          <span className={s.contact}>{number}</span>
          <Button
            className={s.button}
            type="submit"
            onClick={() => deleteContact(id)}
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
