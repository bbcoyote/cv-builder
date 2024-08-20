/* eslint-disable react/prop-types */
import "../styles/Education.styles.css";

function Education({ setEducation }) {
  const addEducationEntry = () => {
    setEducation((prev) => [
      ...prev,
      {
        schoolName: "",
        schoolLocation: "",
        degree: "",
        major: "",
        dateAttended: "",
      },
    ]);
  };

  const handleEducationChange = (e, index, field) => {
    setEducation((prev) => {
      const newEntries = [...prev];
      newEntries[index][field] = e.target.value;
      return newEntries;
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
          <form action=''>
            <label htmlFor='school-name'>
              School Name
              <input
                type='text'
                placeholder='e.g. Foothill College'
                onChange={schoolName}
              />
            </label>
            <label htmlFor='school-location'>
              School Location
              <input
                type='text'
                placeholder='e.g. Los Altos, CA'
                onChange={schoolLocation}
              />
            </label>
            <label htmlFor='Degree'>
              <input
                type='text'
                placeholder='e.g. Bachelor of Arts'
                onChange={degree}
              />
            </label>
            <label htmlFor='Field'>
              Field Of Study
              <input
                type='text'
                placeholder='e.g. Accounting'
                onChange={major}
              />
            </label>
            <label htmlFor='Graduation-date'>
              <input
                type='text'
                placeholder='10/20/2015 to 08/15/2019'
                onChange={attendedDate}
              />
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

export default Education;
