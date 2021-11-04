import React from "react";
import Slider from "../components/Slider/Slider";
import img1 from "../assets/contactUs.jpg";
import img2 from "../assets/contactUs2.jpg";
import img3 from "../assets/contactUs3.jpg";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "./ContactUs.css";

import "./ContactUs.css";
import Swal from "sweetalert2";


// Connecting to emailjs with user ID
import { init } from "emailjs-com";
init("user_9nWOu9G5WMAgTc7XxoH4i");

// Email js server configs. 'emailjs' was used
const SERVICE_ID = "service_fi833b7";
const TEMPLATE_ID = "template_ubia5kl";
const USER_ID = "user_9nWOu9G5WMAgTc7XxoH4i";

function ContactUs() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          type: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          type: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    <div>
      <Slider img1={img1} img2={img2} img3={img3} />
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
      
    </div>
  );
}

export default ContactUs;
