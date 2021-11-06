import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsAction';
function ContactFilter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const сhangeFilter = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={сhangeFilter}
      ></input>
    </label>
  );
}

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default ContactFilter;
