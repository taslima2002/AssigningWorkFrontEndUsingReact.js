import React from 'react';
import HeaderComponent from './HeaderComponent';

const ContactComponent = () => {
  return (
    <div className='text-center' style={{ fontStyle: 'italic', marginTop: '70px', textAlign: 'center' }}>
       <HeaderComponent/>
      <h2>Contact Us</h2>
      <p>
        For any inquiries or feedback, please feel free to reach out to us using the contact information provided below.
      </p>
      <div>
        <h4>Email</h4>
        <p>Email: taslimabanu200@gmail.com</p>
      </div>
      <div>
        <h4>Phone</h4>
        <p>Phone: +1 8918967918</p>
      </div>
      <div>
        <h4>Address</h4>
        <p>New town , Kolkata ,West Bengal ,700156</p>
      </div>
    </div>
  );
};

export default ContactComponent;
