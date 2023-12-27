
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'store/contacts/operations';
import { DialogContent } from '@mui/material';
import Form from './Form';

export default function ContactForm({onClose}) {

  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);


  function addContactToList(newContact) {
    return items.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contact`)
      : dispatch(addContacts(newContact));
  }

  return (
    <DialogContent>
      <Form
        addContact={addContactToList}
        onClose={onClose}
      />
    </DialogContent>
  );
}
