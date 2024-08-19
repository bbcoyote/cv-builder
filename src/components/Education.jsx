import "../styles/Education.styles.css";

function Education() {
  return (
    <>
      <div className='info-wrapper'>
        <div className='page-info'>
          <h1>Education Level</h1>
        </div>
        <div className='form-wrapper'>
          <form action=''>
            <label htmlFor='school-name'>
              School Name
              <input type='text' placeholder='e.g. Foothill College' />
            </label>
            <label htmlFor='school-location'>
              School Location
              <input type='text' placeholder='e.g. Los Altos, CA' />
            </label>
            <label htmlFor='Degree'>
              <input type='text' placeholder='e.g. Bachelor of Arts' />
            </label>
            <label htmlFor='Field'>
              Field Of Study
              <input type='text' placeholder='e.g. Accounting' />
            </label>
            <label htmlFor='Graduation-date'>
              <input type='text' placeholder='10/20/2015 to 08/15/2019' />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default Education;
