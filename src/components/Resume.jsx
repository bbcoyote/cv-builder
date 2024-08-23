/* eslint-disable react/prop-types */
// read state here

function Resume({ contactInfo, education, workExp }) {
  return (
    <>
      <div className='page-info'>Your resume so far!</div>
      <div className='resume'>
        <div className='contact-info'>
          <div className='resume-name'>
            <h1>Contact Information</h1>
            <h2>{contactInfo.firstName}</h2>
            <h2>{contactInfo.lastName}</h2>
            <h2>{contactInfo.jobTitle}</h2>
            <h2>{contactInfo.email}</h2>
            <h2>{contactInfo.phoneNumber}</h2>
          </div>
          <div className='address'>
            <span>{`${contactInfo.address.city} ${contactInfo.address.state} ${contactInfo.address.zip}`}</span>
          </div>
        </div>
        <div className='education'>
          <h1>Education</h1>
          {education.map((element, index) => (
            <div key={index}>
              <h2>{element.schoolName}</h2>
              <h3>{element.schoolLocation}</h3>
              <h3>{element.degree}</h3>
              <h3>{element.major}</h3>
              <h3>{element.dateAttended}</h3>
            </div>
          ))}
        </div>
        <div className='work-history'>
          <h1>Work History</h1>
          {workExp.map((element, index) => (
            <div key={index}>
              <h2>{element.title}</h2>
              <h2>{element.company}</h2>
              <h3>{element.location}</h3>
              <h3>{element.startDate}</h3>
              <h3>{element.endDate}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resume;
