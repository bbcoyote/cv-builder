function WorkExp() {
  return (
    <>
      <div className='info-wrapper'>
        <div className='page-info'>
          <h1 className='title'>Work Exp</h1>
          <p>Start with your most recent experience and work backward.</p>
        </div>
        <div className='form-wrapper'>
          <form action=''>
            <label htmlFor='work title'>
              WHAT WAS YOUR TITLE?
              <input type='text' placeholder='e.g. Sales Associate' />
            </label>
            <label htmlFor='company'>
              WHO DID YOU DO THIS FOR?
              <input
                type='text'
                placeholder='Person, Organization, Company, or Family Business'
              />
            </label>
            <label htmlFor='location'>
              LOCATION
              <input type='text' placeholder='e.g. San Francisco, CA' />
            </label>
            <label htmlFor='start date'>
              START DATE
              <input type='text' placeholder='e.g. 05/10/2020' />
            </label>
            <label htmlFor='end date'>
              END DATE
              <input type='text' placeholder='e.g. 08/18/2024' />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default WorkExp;
