
import './Contact.css'
import * as yup from 'yup'
import { useState } from "react";

function App() {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  
  const [errorMsgs, setErrorMsgs] = useState({});
  const [successfulSubmition, setSuccessfulSubmition] = useState(false);

  const Schema = yup.object().shape({
    name: yup.string().min(4, "Name must be at least 4 letters").required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    subject: yup.string(),
    msg: yup.string().required("Message is required"),
  });

  const Validate = async () => {
    try {
      await Schema.validate(contactFormData, { 
        abortEarly: false 
      });
      return true;
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrorMsgs(validationErrors);
      return false;
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setErrorMsgs({}); 
    const formValid = await Validate();

    if (formValid) {
      console.log("Form submitted:", contactFormData);
      setSuccessfulSubmition(true);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  return (
    <>
    <img className='background_picture' src="/Imgs/background_picture2.png" alt="background_picture" />
    <div className='page-title'>
      <img className='page-logo' src="/Imgs/furniro-logo.webp" alt="logo-img" />
      <h1 className='contact-page-name'>Contact</h1>
      <p className='pageMiddle-nav'>
        <span className='pageName-nav'>Home</span>  
        <span className='mark'>{">"}</span>
        <span className='pageName2-nav'>Contact</span> 
      </p>
    </div>
    <div className='contact-header'>
      <h1>Get In Touch With Us</h1>
      <p>
        For more informations about our products & services. Please feel free
        to drop us an email. Our staff will always be there to help you out.
        Do not hesitate !
      </p>
    </div>
    {successfulSubmition &&            
        <span className='success_msg'>Thanks for completing the form. We{"'"}ll be in touch soon!</span>
    }
    <div className='contact-container'>
      <div className='contact-side-info'>
        <div className='contact-info-group'>
          <img className='group-img' src="/Imgs/address.png" alt="address" />
          <span className='group-title'>Address</span>
          <p className='group-info'>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
        <div className='contact-info-group'>
          <img className='group-img' src="/Imgs/phone.png" alt="phone" />
          <span className='group-title'>Phone</span>
          <p className='group-info'>Mobile: +(84) 546-6789</p>
          <p className='group-info2'>Hotline: +(84) 456-6789</p>
        </div>
        <div className='contact-info-group'>
          <img className='group-img' src="/Imgs/time.png" alt="time" />
          <span className='group-title'>Working Time</span>
          <p className='group-info'>Monday-Friday: 9:00 - 22:00</p>
          <p className='group-info2'>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
      <form className='contact-form' onSubmit={handleOnSubmit} noValidate>
        <div className='form-field'>  
          <label htmlFor="name">Your Name</label>
          <input
            className='input-name'
            type="text"
            name="name"
            id="name"
            placeholder='Abc' 
            value={contactFormData.name}
            onChange={handleOnChange}
          />
          {errorMsgs.name && <p className='error'>{errorMsgs.name}</p>}      
        </div>
        <div className='form-field'>          
          <label htmlFor="email">Email Address</label>
          <input
            className='input-name'
            type="email"
            name="email"
            id="email"
            placeholder='Abc@def.com'
            value={contactFormData.email}
            onChange={handleOnChange}
          />
          {errorMsgs.email && <p className='error'>{errorMsgs.email}</p>}    
        </div>
        <div className='form-field'>          
          <label htmlFor="subject">Subject</label>
          <textarea
            className='input-name'
            name="subject"
            id="subject"
            placeholder='This is an optional'
            value={contactFormData.subject}
            onChange={handleOnChange}
          />
          {errorMsgs.subject && <p className='error'>{errorMsgs.subject}</p>}  
        </div>
        <div className='form-field'>          
          <label htmlFor="msg">Message</label>
          <textarea
            name="msg"
            id="msg"
            placeholder='Hi! i’d like to ask about'
            value={contactFormData.msg}
            onChange={handleOnChange}
          />
          {errorMsgs.msg && <p className='error'>{errorMsgs.msg}</p>}      
        </div>
        <input className='submit' type="submit" value="Submit" />
      </form>
    </div> 
    <div className='red-part-footer'>
        <div className='footer-group'>
          <div>
            <img className='footer-img' src="/Imgs/trophy-footer-logo.png" alt="footer-logo" />
          </div>
          <div>
          <span>High Quality</span>
          <p className='dark-grey-words'>crafted from top materials</p>
          </div>
        </div>
        <div className='footer-group'>
          <div>
          <img className='footer-img' src="/Imgs/tick-footer-logo.png" alt="footer-logo" />
          </div>
          <div>
            <span>Warranty Protection</span>
            <p className='dark-grey-words'>Over 2 years</p>
          </div>
        </div>
        <div className='footer-group'>
          <div>
          <img className='footer-img' src="/Imgs/shipping-footer-logo.png" alt="footer-logo" />
          </div>
          <div>
          <span>Free Shipping</span>
          <p className='dark-grey-words'>Order over 150 $</p>
          </div>
        </div>
        <div className='footer-group'>
          <div>
          <img className='footer-img' src="/Imgs/customerSupport-footer-logo.png" alt="footer-logo" />
          </div>
          <div>
          <span>24 / 7 Support</span>
          <p className='dark-grey-words'>Dedicated support</p>
          </div>
        </div>
    </div>         
    </>
  )
}

export default App
