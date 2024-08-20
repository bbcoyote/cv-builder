import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import "../styles/ContactInfo.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactInfo({ setContactInfo }) {
  const firstNameChange = (e) => {
    setContactInfo((prevPersonName) => ({
      ...prevPersonName,
      firstName: e.target.value,
    }));
  };

  const lastNameChange = (e) => {
    setContactInfo((prevPersonName) => ({
      ...prevPersonName,
      lastName: e.target.value,
    }));
  };

  const jobTitle = (e) => {
    setContactInfo((prevPerson) => ({
      ...prevPerson,
      jobTitle: e.target.value,
    }));
  };

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
          <form action=''>
            <label htmlFor='name' className='name'>
              <FontAwesomeIcon icon={faQuestion} />
              <input
                type='text'
                placeholder='First Name'
                onChange={firstNameChange}
              />
              <input
                type='text'
                placeholder='Last Name'
                onChange={lastNameChange}
              />
            </label>
            <label
              htmlFor='Job Title'
              className='desired-job-title'
              onChange={jobTitle}>
              <FontAwesomeIcon icon={faQuestion} />
              <input type='text' placeholder='Desired Job Title (Optional)' />
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
              <input type='email' placeholder='Email' />
              <input type='text' placeholder='Phone Number' />
            </label>
            <div className='button-group'>
              <button>Submit</button>
              <button>Edit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
