import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import "../styles/ContactInfo.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactInfo() {
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
        <div className='form-wrapper'>
          <form action=''>
            <label htmlFor='name' className='name'>
              <FontAwesomeIcon icon={faQuestion} />
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Last Name' />
            </label>
            <label htmlFor='Job Title' className='desired-job-title'>
              <FontAwesomeIcon icon={faQuestion} />
              <input type='text' placeholder='Desired Job Title (Optional)' />
            </label>
            <label htmlFor='address' className='address'>
              <FontAwesomeIcon icon={faQuestion} />
              <input type='text' placeholder='City' />
              <input type='text' placeholder='State/Province' />
              <input type='text' placeholder='Zip Code' />
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
