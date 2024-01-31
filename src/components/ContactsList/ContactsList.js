import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contacts/operations';
import { selectVisibleContacts } from '../../store/contacts/selectors';
import { List, Item } from './ContactsList.styled';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name}:</span>
          <span>{number}</span>

          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};
