import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'store/contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'store/contacts/selectors';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import ContactForm from 'components/ContactForm/ContactForm';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <List sx={{ width: '100%', bgcolor: '#6B728E' }}>
          {contacts.map(({ name, number, id }) => {
            return (
              <div
                key={id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <ListItem
                  key={id}
                  sx={{ color: 'white', alignItems: 'center ' }}
                >
                  <ListItemAvatar>
                    <Avatar alt={name} src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={name}
                    sx={{ color: 'black' }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {number}
                        </Typography>
                      </React.Fragment>
                    }
                  />

                  <div style={{ display: 'flex', gap: 5 }}>
                    {/* <Tooltip title="Update Contact">
                      <IconButton
                        sx={{ p: 0 }}
                        type="button"
                        onClick={(handleClickOpen)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>Update Contact</DialogTitle>
                      <ContactForm  onClose={handleClose, id} />
                    </Dialog> */}
                    <Tooltip title="Delete Contact">
                      <IconButton
                        sx={{ p: 0 }}
                        type="button"
                        onClick={() => {
                          dispatch(deleteContact(id));
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
              </div>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ContactList;
