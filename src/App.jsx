import { useState } from "react";

import "./App.css";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Resume from "./components/Resume";
import WorkExp from "./components/WorkExp";

// use state here

function App() {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: {
      city: "",
      state: "",
      zip: "",
    },
    email: "",
    phoneNumber: "",
  });

  // const [education, setEducation] = useState({
  //   schoolName: "",
  //   schoolLocation: "",
  //   degree: "",
  //   major: "",
  //   dateAttended: "",
  // });

  // const [workExp, setWorkExp] = useState({
  //   title: "",
  //   company: "",
  //   location: "",
  //   startDate: "",
  //   endDate: "",
  // });

  const [education, setEducation] = useState([]);
  const [workExp, setWorkExp] = useState([]);

  return (
    <>
      <div className='app-container'>
        <div className='editor-container'>
          <h1>Hello, World!</h1>
          <ContactInfo setContactInfo={setContactInfo} />
          <Education setEducation={setEducation} />
          <WorkExp setWorkExp={setWorkExp} />
        </div>
        <div className='resume-container'>
          <Resume
            contactInfo={contactInfo}
            education={education}
            workExp={workExp}
          />
        </div>
      </div>
    </>
  );
}

export default App;
