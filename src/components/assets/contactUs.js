import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
//import './App.css';
import './contactUs.css';
import Swal from 'sweetalert2';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

// Connecting to emailjs with user ID
import{ init } from 'emailjs-com';
init("user_9nWOu9G5WMAgTc7XxoH4i");

// Email js server configs. 'emailjs' was used
const SERVICE_ID = "service_fi833b7";
const TEMPLATE_ID = "template_ubia5kl";
const USER_ID = "user_9nWOu9G5WMAgTc7XxoH4i";

 
const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  
  {/* --- handleOnSubmit method --- */}
  return (
    <div >
    <Navbar id="bar" expand="lg" variant="dark" >
  <Container>
    <Navbar.Brand >CONTACT US</Navbar.Brand>
  </Container>
</Navbar>
    <div className='formContainer'>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Your Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Your Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div> 
    
    <h2 > 
    
      Contact us via telephone : <br></br>
      +233 (0)24279xxxx
      
    </h2>
    
    </div>
    
  );
}
export default ContactForm;