/* eslint-disable react/prop-types */
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import "../styles/ContactInfo.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ContactInfo({ setContactInfo, contactInfo }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setContactInfo({ ...contactInfo, formData });
    setFormData({
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phoneNumber: "",
    });
  };

  // const firstNameChange = (e) => {
  //   setContactInfo((prevPersonName) => ({
  //     ...prevPersonName,
  //     firstName: e.target.value,
  //   }));
  // };

  // const lastNameChange = (e) => {
  //   setContactInfo((prevPersonName) => ({
  //     ...prevPersonName,
  //     lastName: e.target.value,
  //   }));
  // };

  // const jobTitle = (e) => {
  //   setContactInfo((prevPerson) => ({
  //     ...prevPerson,
  //     jobTitle: e.target.value,
  //   }));
  // };

  const city = (e) => {
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      address: {
        ...prevInfo.address,
        city: e.target.value,
      },
    }));
  };

  const state = (e) => {
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      address: {
        ...prevInfo.address,
        state: e.target.value,
      },
    }));
  };

  const zip = (e) => {
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      address: {
        ...prevInfo.address,
        zip: e.target.value,
      },
    }));
  };

  return (
    <>
      <div className='info-wrapper'>
        <div className='page-info'>
          <h1 className='title'>Contact Information</h1>
          <p>
            Let&apos;s start with the basics. To ensure employers can reach you,
            input at lease your name, email, and phone number.
          </p>
        </div>
        <div className='contact-form-wrapper'>
          <form action='' onSubmit={handleSubmit}>
            <label htmlFor='name' className='name'>
              <FontAwesomeIcon icon={faQuestion} />
              <input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='Job Title' className='desired-job-title'>
              <FontAwesomeIcon icon={faQuestion} />
              <input
                type='text'
                placeholder='Desired Job Title (Optional)'
                name='jobTitle'
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='address' className='address'>
              <FontAwesomeIcon icon={faQuestion} />
              <input type='text' placeholder='City' onChange={city} />
              <input
                type='text'
                placeholder='State/Province'
                onChange={state}
              />
              <input type='text' placeholder='Zip Code' onChange={zip} />
            </label>
            <label htmlFor='email & phone number' className='contact-info'>
              <FontAwesomeIcon icon={faQuestion} />
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type='text'
                placeholder='Phone Number'
                name='phoneNumber'
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <div className='button-group'>
              <button type='submit'>Submit</button>
              <button>Edit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
