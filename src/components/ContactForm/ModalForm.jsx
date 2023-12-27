
import { Dialog, DialogTitle, IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React from 'react'
import ContactForm from './ContactForm';

export const ModalForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 0, marginRight: 2 }}>
        <Tooltip title="Add Contact">
          <IconButton sx={{ p: 0 }} onClick={handleClickOpen}>
            <PersonAddIcon sx={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
        <Dialog open={open} onClose={handleClose} >
                  <DialogTitle>Add contact</DialogTitle>
                  <ContactForm onClose={handleClose} />
        </Dialog>
      </Box>
    </div>
  );
}
