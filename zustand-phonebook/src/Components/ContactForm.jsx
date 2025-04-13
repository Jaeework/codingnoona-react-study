import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import usePhoneBookStore from '../stores/usePhonebookStore';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const {addContact, showForm, closeForm} = usePhoneBookStore();

    const handleAddContact = () => {
        if(!name.trim() || !phoneNumber.trim()) return;
        addContact(name, phoneNumber);
        handleCancel();
    }
    const handleCancel = () => {
        setName("");
        setPhoneNumber("");
        closeForm();
    }

    return (
        <Box sx={{ width: { xs:'90%', sm: '60%', md:'40%'}, }} 
            className={`contact-form ${showForm? '' : 'disabled'}`} 
            display="flex" flexDirection="column" alignItems="center" gap={2}>
            <h4>Add New Contact</h4>
            <TextField 
                fullWidth
                required
                id="name" 
                label="Name" 
                variant="outlined" 
                color="secondary"
                value={name} 
                onChange={(event) => setName(event.target.value)} />
            <TextField 
                fullWidth
                required
                type="tel"
                id="phone-number" 
                label="Phone Number" 
                variant="outlined"
                color="secondary" 
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)} />
            <Box sx={{ my:1 }} display="flex" justifyContent="center" gap={2}>
                <Button size="medium" variant="outlined" color="secondary" onClick={handleCancel}>CANCEL</Button>
                <Button size="medium" variant="contained" color="secondary" onClick={handleAddContact}>SAVE</Button>
            </Box>
        </Box>
    )
}

export default ContactForm
