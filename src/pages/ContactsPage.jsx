import React from 'react'

import ContactList from '../components/ContactList/ContactList';



const ContactsPage = () => {
  return (
    <>

      <div >
        <h2 style={{marginLeft:'20px'}}>Contacts</h2>
        <ContactList />
      </div>
    </>
  );
}

export default ContactsPage