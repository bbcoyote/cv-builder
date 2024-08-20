/* eslint-disable react/prop-types */
import "../styles/WorkExp.styles.css";

function WorkExp({ setWorkExp }) {
  const title = (e) => {
    setWorkExp((prevWorkExp) => ({
      ...prevWorkExp,
      title: e.target.value,
    }));
  };

  const company = (e) => {
    setWorkExp((prevWorkExp) => ({
      ...prevWorkExp,
      company: e.target.value,
    }));
  };

  const location = (e) => {
    setWorkExp((prevWorkExp) => ({
      ...prevWorkExp,
      location: e.target.value,
    }));
  };

  const startDate = (e) => {
    setWorkExp((prevWorkExp) => ({
      ...prevWorkExp,
      startDate: e.target.value,
    }));
  };

  const endDate = (e) => {
    setWorkExp((prevWorkExp) => ({
      ...prevWorkExp,
      endDate: e.target.value,
    }));
  };

  return (
    <>
      <div className='info-wrapper'>
        <div className='page-info'>
          <h1 className='title'>Work Exp</h1>
          <p>Start with your most recent experience and work backward.</p>
        </div>
        <div className='work-form-wrapper'>
          <form action=''>
            <label htmlFor='work title'>
              WHAT WAS YOUR TITLE?
              <input
                type='text'
                placeholder='e.g. Sales Associate'
                onChange={title}
              />
            </label>
            <label htmlFor='company'>
              WHO DID YOU DO THIS FOR?
              <input
                type='text'
                placeholder='Person, Organization, Company, or Family Business'
                onChange={company}
              />
            </label>
            <label htmlFor='location'>
              LOCATION
              <input
                type='text'
                placeholder='e.g. San Francisco, CA'
                onChange={location}
              />
            </label>
            <label htmlFor='start date'>
              START DATE
              <input
                type='text'
                placeholder='e.g. 05/10/2020'
                onChange={startDate}
              />
            </label>
            <label htmlFor='end date'>
              END DATE
              <input
                type='text'
                placeholder='e.g. 08/18/2024'
                onChange={endDate}
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

export default WorkExp;
