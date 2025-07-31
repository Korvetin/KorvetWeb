import React, { useState } from 'react';
import './ApplyForm.css'; // create this for styles

function ApplyForm({ role }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    linkedin: '',
    message: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert(`Application for ${role} submitted!`);
  };

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <h3>Apply for: {role}</h3>
      <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
      <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
      <input type="text" name="github" placeholder="GitHub or Portfolio Link" onChange={handleChange} />
      <input type="text" name="linkedin" placeholder="LinkedIn Profile" onChange={handleChange} />
      <textarea name="message" placeholder="Tell us why you're a good fit..." rows="4" onChange={handleChange} />
      <input type="file" name="file" accept=".pdf,.doc,.docx" onChange={handleChange} />
      <button type="submit" className="cta-button">Submit Application </button>
    </form>
  );
}

export default ApplyForm;
