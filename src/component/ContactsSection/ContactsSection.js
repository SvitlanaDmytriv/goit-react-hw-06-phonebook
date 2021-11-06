import s from './ContactsSection.module.css';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactList from '../ContactList/ContactList';
import Button from '../Button/Button';
import { PlusCircleFill } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

export default function ContactsSection({ toggleModall }) {
  const contactsAll = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);
  console.log(contactsAll);

  const filterContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contactsAll.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const visibleContacts = filterContacts();
  return (
    <div className={s.container}>
      <h2 className={s.title}>Contacts</h2>
      <Button className={s.button} type="button" onClick={toggleModall}>
        <PlusCircleFill width="40" height="40" className={s.icon} />
      </Button>
      {contactsAll.length > 1 && <ContactFilter />}
      {visibleContacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className={s.text}>
          Contact list is empty. Add your first contact to the list.
        </p>
      )}

      {visibleContacts < 1 && filterValue !== '' && (
        <p className={s.text}>
          There is no contact with the name "{filterValue}" in the list
        </p>
      )}
    </div>
  );
}
