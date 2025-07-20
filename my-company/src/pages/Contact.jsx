// src/pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We'll get back to you at ${formData.email}.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '20px auto',
    padding: '25px',
    border: '1px solid #00ACC1', // Darker Cyan border
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,172,193,0.3)', // Cyan shadow
    backgroundColor: '#E1F5FE', // Very Light Blue background
  };

  const inputStyle = {
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #00BCD4', // Medium Cyan border
    borderRadius: '5px',
    fontSize: '1em',
    color: '#263238', // Dark Grey text
    backgroundColor: '#FFFFFF' // White background for inputs
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical'
  };

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#00838F', // Dark Cyan button
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1em',
    marginTop: '15px',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#B3E5FC', minHeight: '80vh', color: '#004D40' }}> {/* Light Blue background, Dark Green text */}
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
        />
        <button type="submit" style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#006064'} // Darker on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#00838F'}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
