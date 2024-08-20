// read state here

function Resume({ contactInfo }) {
  return (
    <>
      <div className='page-info'>Your resume so far!</div>
      <div className='resume'>
        <div className='contact-info'>
          <div className='resume-name'>
            <h1>{contactInfo.firstName}</h1>
            <h1>{contactInfo.lastName}</h1>
            <h1>{contactInfo.jobTitle}</h1>
          </div>
          <div className='address'>
            <span>{`${contactInfo.address.city} ${contactInfo.address.state} ${contactInfo.address.zip}`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
