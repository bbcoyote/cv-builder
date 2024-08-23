/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/WorkExp.styles.css";

function WorkExp({ setWorkExp, workExp }) {
  const [formData, setFormData] = useState({
    title: "",
    comapny: "",
    location: "",
    startAndEndDate: "",
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

    setWorkExp([...workExp, formData]);
    setFormData({
      title: "",
      comapny: "",
      location: "",
      startAndEndDate: "",
    });
  };

  return (
    <>
      <div className='info-wrapper'>
        <div className='page-info'>
          <h1 className='title'>Work Exp</h1>
          <p>Start with your most recent experience and work backward.</p>
        </div>
        <div className='work-form-wrapper'>
          <form action='' onSubmit={handleSubmit}>
            <label htmlFor='work title'>
              WHAT WAS YOUR TITLE?
              <input
                type='text'
                placeholder='e.g. Sales Associate'
                name='title'
                value={formData.title}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='company'>
              WHO DID YOU DO THIS FOR?
              <input
                type='text'
                placeholder='Person, Organization, Company, or Family Business'
                name='company'
                value={formData.comapny}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='location'>
              LOCATION
              <input
                type='text'
                placeholder='e.g. San Francisco, CA'
                name='location'
                value={formData.location}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='start date and end date'>
              START DATE
              <input
                type='text'
                placeholder='e.g. 05/10/2020'
                name='startAndEndDate'
                value={formData.startAndEndDate}
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

export default WorkExp;
