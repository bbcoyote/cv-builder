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
          </div>
          <div className='address'>
            <span>{`${contactInfo.address.city} ${contactInfo.address.state} ${contactInfo.address.zip}`}</span>
          </div>
        </div>
        <div className='education'>
          <h1>Education</h1>
          <h2>{education.schoolName}</h2>
          <h3>{education.schoolLocation}</h3>
          <h3>{education.degree}</h3>
          <h3>{education.major}</h3>
          <h3>{education.dateAttended}</h3>
        </div>
        <div className='work-history'>
          <h1>Work History</h1>
          <h2>{workExp.title}</h2>
          <h2>{workExp.company}</h2>
          <h3>{workExp.location}</h3>
          <h3>{workExp.startDate}</h3>
          <h3>{workExp.endDate}</h3>
        </div>
      </div>
    </>
  );
}

export default Resume;
