import "./App.css";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Resume from "./components/Resume";
import WorkExp from "./components/WorkExp";

// use state here

function App() {
  return (
    <>
      <div className='app-container'>
        <div className='editor-container'>
          <h1>Hello, World!</h1>
          <ContactInfo />
          <Education />
          <WorkExp />
        </div>
        <div className='resume-container'>
          <Resume />
        </div>
      </div>
    </>
  );
}

export default App;
