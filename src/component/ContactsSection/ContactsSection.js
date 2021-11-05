import s from './ContactsSection.module.css';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactList from '../ContactList/ContactList';
import Button from '../Button/Button';
import { PlusCircleFill } from 'react-bootstrap-icons';

export default function ContactsSection({
  filterValue,
  сhangeFilter,
  filterContacts,
  deleteContact,
  toggleModall,
  contacts,
}) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Contacts</h2>
      <Button className={s.button} type="button" onClick={toggleModall}>
        <PlusCircleFill width="40" height="40" className={s.icon} />
      </Button>
      {contacts.length > 0 && (
        <ContactFilter value={filterValue} onChange={сhangeFilter} />
      )}
      {contacts.length > 0 ? (
        <ContactList
          contactsList={filterContacts()}
          deleteContact={deleteContact}
        />
      ) : (
        <p className={s.text}>
          {' '}
          Contact list is empty. Add your first contact to the list.{' '}
        </p>
      )}
      {filterContacts() < 1 && filterValue !== '' && (
        <p className={s.text}>
          There is no contact with the name "{filterValue}" in the list
        </p>
      )}
    </div>
  );
}
