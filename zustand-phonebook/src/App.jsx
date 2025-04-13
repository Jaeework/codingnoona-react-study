import './App.css'
import { Backdrop, Container, Grid } from '@mui/material'
import ContactForm from './Components/ContactForm'
import ContactList from './Components/ContactList'
import usePhoneBookStore from './stores/usePhonebookStore';

function App() {
  const { showForm, closeForm } = usePhoneBookStore();

  return (
    <Container maxWidth="md">
      <h2 className="title">My Contacts</h2>
      <Grid className="container" container display="flex" justifyContent="center" alignItems="center" >
        <Grid size={{ xs:12, sm:10, md:8}} >
          <ContactList />
        </Grid>
      </Grid>
      <ContactForm />
      <Backdrop
        sx={() => ({ color: '#fff', zIndex: 99 })}
        open={showForm}
        onClick={closeForm}></Backdrop>
    </Container>
  )
}

export default App
