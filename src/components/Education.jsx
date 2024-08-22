/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Education.styles.css";

function Education({ setEducation, education }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolLocation: "",
    degree: "",
    major: "",
    dateAttended: "",
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

    setEducation([...education, formData]);
    setFormData({
      schoolName: "",
      schoolLocation: "",
      degree: "",
      major: "",
      dateAttended: "",
    });
  };

  // const schoolName = (e) => {
  //   setEducation((prevSchool) => ({
  //     ...prevSchool,
  //     schoolName: e.target.value,
  //   }));
  // };

  // const schoolLocation = (e) => {
  //   setEducation((prevSchool) => ({
  //     ...prevSchool,
  //     schoolLocation: e.target.value,
  //   }));
  // };

  // const degree = (e) => {
  //   setEducation((prevSchool) => ({
  //     ...prevSchool,
  //     degree: e.target.value,
  //   }));
  // };

  // const major = (e) => {
  //   setEducation((prevSchool) => ({
  //     ...prevSchool,
  //     major: e.target.value,
  //   }));
  // };

  // const attendedDate = (e) => {
  //   setEducation((prevSchool) => ({
  //     ...prevSchool,
  //     dateAttended: e.target.value,
  //   }));
  // };

  return (
    <>
      <div className='info-wrapper'>
        <div className='page-info'>
          <h1>Education Level</h1>
        </div>
        <div className='education-form-wrapper'>
          <form action='' onSubmit={handleSubmit}>
            <label htmlFor='school-name'>
              School Name
              <input
                type='text'
                placeholder='e.g. Foothill College'
                name='schoolName'
                value={formData.schoolName}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='school-location'>
              School Location
              <input
                type='text'
                placeholder='e.g. Los Altos, CA'
                name='schoolLocation'
                value={formData.schoolLocation}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='Degree'>
              <input
                type='text'
                placeholder='e.g. Bachelor of Arts'
                name='degree'
                value={formData.degree}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='Field'>
              Field Of Study
              <input
                type='text'
                placeholder='e.g. Accounting'
                name='major'
                value={formData.major}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='Graduation-date'>
              <input
                type='text'
                placeholder='10/20/2015 to 08/15/2019'
                name='dateAttended'
                value={formData.dateAttended}
                onChange={handleChange}
              />
            </label>
            <div className='button-group'>
              <button type='button'>edit</button>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Education;
