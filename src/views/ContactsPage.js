import { useState } from 'react';
import shortid from 'shortid';
import ContactsSection from '../component/ContactsSection/ContactsSection';
import useLocalStorage from '../hooks/useLocalStorage';

import ContactForm from '../component/ContactForm/ContactForm';
import Modal from '../component/Modal/Modal';

export default function ContactsPage() {
  const [contacts, setContacts] = useLocalStorage();
  const [filterValue, setFilterValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const addContact = ({ name, number }) => {
    const contactСomparison = contacts
      .map(contact => contact.name.toLocaleLowerCase())
      .includes(name.toLocaleLowerCase());

    if (contactСomparison) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = { id: shortid.generate(), name, number };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id),
    );
  };

  const сhangeFilter = e => {
    const { value } = e.target;
    setFilterValue(value);
  };

  const filterContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return visibleContacts;
  };

  const toggleModall = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <>
      {showModal && (
        <Modal toggleModall={toggleModall}>
          <ContactForm addContact={addContact} toggleModall={toggleModall} />
        </Modal>
      )}

      <ContactsSection
        filterValue={filterValue}
        filterContacts={filterContacts}
        сhangeFilter={сhangeFilter}
        deleteContact={deleteContact}
        toggleModall={toggleModall}
        contacts={contacts}
      />
    </>
  );
}
